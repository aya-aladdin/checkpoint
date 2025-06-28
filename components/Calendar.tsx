'use client';

import {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {Button} from '@/components/ui/button';

export function Calendar() {
    const [displayMonth, setDisplayMonth] = useState(8); // September (0-indexed)
    const [displayYear, setDisplayYear] = useState(2025);

    const eventDates = [5, 6, 7]; // September 5-7, 2025
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            if (displayMonth === 0) {
                setDisplayMonth(11);
                setDisplayYear(displayYear - 1);
            } else {
                setDisplayMonth(displayMonth - 1);
            }
        } else {
            if (displayMonth === 11) {
                setDisplayMonth(0);
                setDisplayYear(displayYear + 1);
            } else {
                setDisplayMonth(displayMonth + 1);
            }
        }
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(displayMonth, displayYear);
        const firstDay = getFirstDayOfMonth(displayMonth, displayYear);
        const days = [];

        // Empty cells for days from previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(
                <div key={`empty-${i}`} className="h-10 w-10"></div>
            );
        }

        // Days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const isEventDay = displayMonth === 8 && displayYear === 2025 && eventDates.includes(day);

            days.push(
                <div
                    key={day}
                    className={`h-10 w-10 flex items-center justify-center rounded-lg font-medium transition-all duration-200 ${
                        isEventDay
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110 font-bold'
                            : 'text-gray-300 hover:bg-slate-700'
                    }`}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl max-w-sm w-full">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateMonth('prev')}
                    className="text-gray-400 hover:text-white hover:bg-slate-700"
                >
                    <ChevronLeft className="h-4 w-4"/>
                </Button>

                <h3 className="text-lg font-semibold text-white">
                    {monthNames[displayMonth]} {displayYear}
                </h3>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateMonth('next')}
                    className="text-gray-400 hover:text-white hover:bg-slate-700"
                >
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-4">
                {weekdays.map((day) => (
                    <div
                        key={day}
                        className="h-8 flex items-center justify-center text-sm font-medium text-gray-400"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 mb-4">
                {renderCalendarDays()}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
                <span className="text-gray-300">CheckPoint Dates</span>
            </div>
        </div>
    );
}