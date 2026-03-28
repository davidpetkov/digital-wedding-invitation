import React from 'react';

const WeddingInvitation = () => {
  const days = ['ПОН', 'ВТОР', 'СРЕД', 'ЧЕТ', 'ПЕТ', 'САБ', 'НЕТ'];
  const totalDays = 30;
  const specialDate = 7;

  return (
    <div className="flex justify-center bg-secondary p-[60px_10px] font-serif box-border">
      <div className="bg-card w-full max-w-[500px] rounded-xl p-[30px_15px_15px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center relative box-border h-fit">
        
        <div className="relative mt-[10px]">
          
          {/* Title */}
          <div className="text-right mb-[-10px] mr-[5px]">
            <span className="font-serif italic text-accent text-[clamp(1.8rem,7vw,2.8rem)]">
              Јуни 2026
            </span>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-[repeat(7,1fr)] border-t border-l border-border w-full box-border">
            {/* Header */}
            {days.map(day => (
              <div key={day} className="p-[8px_0] border-r border-b border-border text-[clamp(0.55rem,2.2vw,0.7rem)] text-accent font-bold bg-[#fafafa]">
                {day}
              </div>
            ))}

            {/* Date Cells */}
            {Array.from({ length: totalDays }).map((_, i) => {
              const date = i + 1;
              return (
                <div key={date} className="aspect-square border-r border-b border-border flex items-center justify-center text-[clamp(0.9rem,4vw,1.1rem)] text-[#555] relative bg-white">
                  {date}
                  {date === specialDate && <HandDrawnHeart />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const HandDrawnHeart = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] pointer-events-none z-10"
  >
    <path
      d="M50,35 C50,25 35,15 20,30 C10,45 50,85 50,85 C50,85 90,45 80,30 C65,15 50,25 50,35"
      fill="none"
      className="stroke-primary"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export default WeddingInvitation;