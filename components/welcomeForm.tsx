import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface CalendarDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
}

interface DateTimeFormatOptions {
  day: 'numeric' | '2-digit';
  month: 'short' | 'long' | 'numeric' | '2-digit';
  year: 'numeric' | '2-digit';
}

const XpertBuddyForm: React.FC = () => {
  const [budget, setBudget] = useState<number>(65);
  const [wordCount, setWordCount] = useState<number>(1100);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 11, 19));
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2024, 11, 19));
  const [selectedHour, setSelectedHour] = useState<number>(24);
  const [selectedMinute, setSelectedMinute] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number>(11);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  // Days of the week headers
  const daysOfWeek: string[] = ['M', 'TU', 'W', 'T', 'FR', 'SA', 'S'];
  
  // Format date for display
  const formatDisplayDate = (date: Date): string => {
    const options: DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options).replace(',', '');
  };

  // Generate calendar days dynamically
  const generateCalendarDays = (): CalendarDay[] => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    // Adjust day of week to match our calendar (Monday is 0)
    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    // Get days from previous month to fill the first row
    const daysFromPrevMonth = firstDayIndex;
    const prevMonthDays: CalendarDay[] = [];
    if (daysFromPrevMonth > 0) {
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
      
      for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
        prevMonthDays.push({
          day: i,
          month: prevMonth,
          year: prevMonthYear,
          isCurrentMonth: false
        });
      }
    }
    
    // Current month days
    const currentMonthDays: CalendarDay[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({
        day: i,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true
      });
    }
    
    // Next month days to complete the calendar grid (6 rows of 7 days)
    const totalCalendarCells = 42; // 6 rows × 7 days
    const nextMonthDays: CalendarDay[] = [];
    const daysNeeded = totalCalendarCells - prevMonthDays.length - currentMonthDays.length;
    
    if (daysNeeded > 0) {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      
      for (let i = 1; i <= daysNeeded; i++) {
        nextMonthDays.push({
          day: i,
          month: nextMonth,
          year: nextMonthYear,
          isCurrentMonth: false
        });
      }
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  // Navigate between months
  const goToPreviousMonth = (): void => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = (): void => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPreviousYear = (): void => {
    setCurrentYear(currentYear - 1);
  };

  const goToNextYear = (): void => {
    setCurrentYear(currentYear + 1);
  };

  // Check if a date is the selected date
  const isSelectedDate = (dayObj: CalendarDay): boolean => {
    return selectedDate && 
      dayObj.day === selectedDate.getDate() && 
      dayObj.month === selectedDate.getMonth() && 
      dayObj.year === selectedDate.getFullYear();
  };

  // Select a date
  const handleDateSelect = (dayObj: CalendarDay): void => {
    const newDate = new Date(dayObj.year, dayObj.month, dayObj.day);
    setSelectedDate(newDate);
  };

  // Get month name
  const getMonthName = (month: number): string => {
    const monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
  };

  // Toggle calendar visibility
  const toggleCalendar = (): void => {
    setShowCalendar(!showCalendar);
  };

  // Generate times for dropdown
  const hours: number[] = Array.from({ length: 24 }, (_, i) => i + 1);
  const minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto p-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Welcome XpertBuddy</h1>
        <button className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input 
            type="text" 
            className="w-full border rounded-md p-2" 
            placeholder="I need help in java tutors for online test"
            defaultValue="I need help in java tutors for online test"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea 
            className="w-full border rounded-md p-2 h-24" 
            placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
            defaultValue="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <p className="text-xs text-gray-500 mt-1">Minimum 15 characters</p>
        </div>

        {/* Attach File Button */}
        <div>
          <button className="flex items-center text-purple-600 space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white">📎</span>
            </div>
            <span>Attach a File</span>
          </button>
        </div>

        {/* Type and Subject */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Essay</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <div className="relative">
              <select className="w-full border rounded-md p-2 appearance-none">
                <option>Others</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Word Count and Budget */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Numbers of Words</label>
            <div className="flex items-center">
              <button 
                className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                onClick={() => setWordCount(Math.max(0, wordCount - 100))}
              >
                -
              </button>
              <span className="mx-4 text-lg">{wordCount}</span>
              <button 
                className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                onClick={() => setWordCount(wordCount + 100)}
              >
                +
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">4 pages</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Set an Approximate Budget</label>
            <div className="flex items-center">
              <button 
                className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                onClick={() => setBudget(Math.max(0, budget - 5))}
              >
                -
              </button>
              <span className="mx-4 text-lg">${budget}</span>
              <button 
                className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                onClick={() => setBudget(budget + 5)}
              >
                +
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium mb-2">Deadline</label>
          <div className="border rounded-md p-4">
            {/* Date display and selector */}
            <div className="flex justify-between items-center mb-2" onClick={toggleCalendar}>
              <span>{formatDisplayDate(selectedDate)}</span>
              <button className="text-gray-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Calendar (shown conditionally) */}
            {showCalendar && (
              <div className="mb-4">
                {/* Calendar Navigation */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2 items-center">
                    <button onClick={goToPreviousYear}><ChevronsLeft size={16} /></button>
                    <button onClick={goToPreviousMonth}><ChevronLeft size={16} /></button>
                  </div>
                  <span className="font-medium">{getMonthName(currentMonth)} {currentYear}</span>
                  <div className="flex space-x-2 items-center">
                    <button onClick={goToNextMonth}><ChevronRight size={16} /></button>
                    <button onClick={goToNextYear}><ChevronsRight size={16} /></button>
                  </div>
                </div>

                {/* Calendar Header */}
                <div className="grid grid-cols-7 text-center mb-2">
                  {daysOfWeek.map((day, index) => (
                    <div key={index} className="h-8 flex items-center justify-center text-sm font-medium">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {generateCalendarDays().map((dayObj, index) => {
                    const isSelected = isSelectedDate(dayObj);
                    const isCurrentMonth = dayObj.isCurrentMonth;
                    
                    return (
                      <div 
                        key={index}
                        className={`h-8 w-8 flex items-center justify-center rounded-full mx-auto text-sm cursor-pointer
                          ${isSelected ? 'bg-purple-600 text-white' : ''}
                          ${!isCurrentMonth ? 'text-gray-400' : 'text-gray-800'}
                        `}
                        onClick={() => handleDateSelect(dayObj)}
                      >
                        {dayObj.day}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Time selector */}
            <div className="flex items-center mt-4 space-x-2">
              <div className="relative inline-block">
                <select 
                  className="appearance-none border rounded-md py-1 pl-3 pr-8 bg-white"
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                >
                  {hours.map(hour => (
                    <option key={hour} value={hour}>{hour}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <span>:</span>
              <div className="relative inline-block">
                <select 
                  className="appearance-none border rounded-md py-1 pl-3 pr-8 bg-white"
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(parseInt(e.target.value))}
                >
                  {minutes.map(minute => (
                    <option key={minute} value={minute}>{minute.toString().padStart(2, '0')}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm">{formatDisplayDate(selectedDate)} {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')} AM</p>
              <button 
                className="bg-white text-purple-600 font-medium"
                onClick={() => setShowCalendar(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        {/* Choose Expert Button */}
        <button className="w-full bg-purple-600 text-white rounded-full py-3 font-medium">
          Choose An Expert
        </button>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">📝</div>
            <div>
              <h3 className="font-medium">Describe your project</h3>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">👨‍💻</div>
            <div>
              <h3 className="font-medium">Choose and Experts</h3>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">💳</div>
            <div>
              <h3 className="font-medium">Pay for the project.</h3>
              <p className="text-sm text-gray-600">prepay 30% or full price</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">📋</div>
            <div>
              <h3 className="font-medium">Get your project done and get a 20-days warranty period</h3>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">🤖</div>
            <div>
              <h3 className="font-medium">AI Free</h3>
              <p className="text-sm text-gray-600">Our Experts do not use ai in completing projects, and those verified by us have the "AI Free" badge.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-2xl">🔒</div>
            <div>
              <h3 className="font-medium">Payment Protection</h3>
              <p className="text-sm text-gray-600">The deposit remains on your balance until your order is ready and you're satisfied.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XpertBuddyForm;