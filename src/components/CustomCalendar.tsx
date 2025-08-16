'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CustomCalendarProps {
  selectedDate: string
  onDateSelect: (date: string) => void
  minDate?: string
}
type CalendarDay = {
  date: number
  isCurrentMonth: boolean
  fullDate: Date
}

export default function CustomCalendar({ selectedDate, onDateSelect, minDate }: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()
  const minimumDate = minDate ? new Date(minDate) : today

  // Swedish month and day names
  const monthNames = [
    'januari', 'februari', 'mars', 'april', 'maj', 'juni',
    'juli', 'augusti', 'september', 'oktober', 'november', 'december'
  ]

  const dayNames = ['MÅ', 'TI', 'ON', 'TO', 'FR', 'LÖ', 'SÖ']

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(new Date(selectedDate))
    }
  }, [selectedDate])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
    // Convert to Monday = 0 format
    let startDay = firstDay.getDay() - 1
    if (startDay < 0) startDay = 6

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      const prevMonth = new Date(year, month, 0)
      const prevDate = prevMonth.getDate() - (startDay - 1 - i)
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, prevDate)
      })
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: new Date(year, month, day)
      })
    }
    
    // Add days from next month to fill the grid
    const remainingDays = 42 - days.length // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, day)
      })
    }
    
    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'next') {
        newMonth.setMonth(newMonth.getMonth() + 1)
      } else {
        newMonth.setMonth(newMonth.getMonth() - 1)
      }
      return newMonth
    })
  }

  const handleDateClick = (day: CalendarDay) => {
    if (!day.isCurrentMonth) return
    const dateObj = day.fullDate
    if (dateObj < minimumDate) return
    // Fix: always use local date, not UTC (toISOString shifts to UTC and can cause off-by-one)
    const year = dateObj.getFullYear()
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
    const date = dateObj.getDate().toString().padStart(2, '0')
    const localDateString = `${year}-${month}-${date}`
    onDateSelect(localDateString)
  }

  const isSelected = (day: CalendarDay) => {
    if (!selectedDate || !day.isCurrentMonth) return false
    const dateString = day.fullDate.toISOString().split('T')[0]
    return dateString === selectedDate
  }

  const isDisabled = (day: CalendarDay) => {
    if (!day.isCurrentMonth) return true
    return day.fullDate < minimumDate
  }

  const isToday = (day: CalendarDay) => {
    if (!day.isCurrentMonth) return false
    const today = new Date()
    return day.fullDate.toDateString() === today.toDateString()
  }

  const days: CalendarDay[] = getDaysInMonth(currentMonth)

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-10 shadow-xl max-w-xs md:max-w-[40rem] md:w-[50rem] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
        </button>
        
        <motion.h3 
          key={`${currentMonth.getMonth()}-${currentMonth.getFullYear()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-base md:text-lg font-bold text-smidig-darkblue"
        >
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </motion.h3>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-1 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
        </button>
      </div>

      {/* Calendar Title */}
      <div className="text-center mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-bold text-smidig-darkblue mb-2">När vill du flytta?</h2>
        <p className="text-gray-600 text-xs md:text-sm">Välj önskat datum för din flytt. Vi hjälper dig hitta bästa möjliga tid.</p>
      </div>

      {/* Choose Date Button */}
      <div className="text-center mb-3 md:mb-4">
        <div className="inline-flex items-center justify-center bg-gradient-cta text-smidig-darkblue px-3 md:px-4 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base">
          📅 Välj Datum
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs md:text-sm font-semibold text-gray-500 py-1 md:py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <motion.div 
        className="grid grid-cols-7 gap-1"
        key={`${currentMonth.getMonth()}-${currentMonth.getFullYear()}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        {days.map((day: CalendarDay, index) => {
          const selected = isSelected(day)
          const disabled = isDisabled(day)
          const todayDate = isToday(day)
          
          return (
            <motion.button
              key={`${day.fullDate.getTime()}-${index}`}
              onClick={() => handleDateClick(day)}
              disabled={disabled}
              className={`
                aspect-square rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-200
                ${day.isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}
                ${selected 
                  ? 'bg-gradient-cta text-black shadow-lg' 
                  : todayDate
                  ? 'bg-smidig-blue text-yellow-500 font-bold'
                  : disabled
                  ? 'text-red-500 cursor-not-allowed'
                  : 'hover:bg-gray-100 hover:shadow-md'
                }
                ${!day.isCurrentMonth ? 'opacity-30' : ''}
                min-h-[28px] md:min-h-[32px]
              `}
            >
              {day.date}
            </motion.button>
          )
        })}
      </motion.div>

      {/* Selected Date Display */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-3 md:mt-4 text-center p-2 md:p-3 bg-gray-50 rounded-xl"
        >
          <p className="text-xs md:text-sm text-gray-600">Valt datum:</p>
          <p className="font-bold text-smidig-darkblue text-xs md:text-sm">
            {new Date(selectedDate).toLocaleDateString('sv-SE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </motion.div>
      )}
    </div>
  )
}
