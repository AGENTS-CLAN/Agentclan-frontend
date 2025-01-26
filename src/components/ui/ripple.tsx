// import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

// import { cn } from "@/lib/utils";

// interface RippleProps extends ComponentPropsWithoutRef<"div"> {
//   mainCircleSize?: number;
//   mainCircleOpacity?: number;
//   numCircles?: number;
// }

// export const Ripple = React.memo(function Ripple({
//   mainCircleSize = 610,
//   mainCircleOpacity = 0.54,
//   numCircles = 10,
//   className,
//   ...props
// }: RippleProps) {
//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute inset-0 select-none",
//         className
//       )}
//       {...props}
//     >
//       {Array.from({ length: numCircles }, (_, i) => {
//         const size = mainCircleSize + i * 70;
//         const opacity = mainCircleOpacity - i * 0.03;
//         const animationDelay = `${i * 0.06}s`;
//         const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
//         const borderOpacity = 5 + i * 5;

//         return (
//           <div
//             key={i}
//             className="absolute animate-ripple rounded-full bg-[#60ff0a17] shadow-xl" // Applying green background color here
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               opacity,
//               animationDelay,
//               borderStyle,
//               borderWidth: "3px",
//               borderColor: `rgba(82, 229, 0, ${borderOpacity / 100})`, // Transitioning from gray to green
//               top: "50%",
//               left: "50%",
//               transform: "translate(-10%, -50%) scale(1)",
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// });


// Ripple.displayName = "Ripple";




import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 610,
  mainCircleOpacity = 0.54,
  numCircles = 60,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <React.Fragment key={i}>
            <div
              key={`left-${i}`}
              className="absolute animate-ripple rounded-full bg-[#60ff0a17] shadow-xl" // Applying green background color here
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "3px",
                borderColor: `rgba(82, 229, 0, ${borderOpacity / 100})`, // Transitioning from gray to green
               
                transform: "translate(-10%, 50%) scale(1)",
              }}
            />
            <div
              key={`right-${i}`}
              className="absolute animate-ripple rounded-full bg-[#60ff0a17] shadow-xl" // Applying green background color here
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "3px",
                borderColor: `rgba(82, 229, 0, ${borderOpacity / 100})`, // Transitioning from gray to green
              
                transform: "translate(-50%, 10%) scale(1)",
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
