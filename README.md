# Timer App Assignment 

Welcome to the Timer App Assignment! As part of this assignment I am working on fixing the issues in the current project.

---

## **Objective**
The app currently has a partially implemented timer system, and I am addressing listed issues and extending its functionality.

---

## **Tech Stack**
- **Frontend Framework**: React (with Vite for fast development)
- **Styling**: Tailwind CSS
- **Testing Framework**: Vitest (for unit and component testing)

---

## **Project Setup**

1. Clone the repository:  
   ```bash
   git clone https://github.com/CW-Codewalnut/timer.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

4. Run tests:  
   ```bash
   npm vitest
   ```


## **Completed Tasks**

   1. **Match the UI:** Fixed!
   
   2. **Simultaneous Timers:** Fixed!
      - Fixed! Now the timer app supports multiple timers.

   3. **Snack Bar Behavior:** Fixed!
      - When a timer is completed:
        - A snack bar notification should display.
        - The notification sound should keep playing until the snack bar is dismissed.

   4. **Fix Snack Bar Console Error:** Fixed!
      - Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   5. **Extract Common Components:** Fixed!
      - Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
      - Replace all instances of similar buttons in the app with this component.

   6. **Consolidate Modal Code:** Fixed!
      - Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   7. **Validation Snack Bars:** Fixed!
      - Currently, the **Submit button** is disabled when the form is invalid.
      - Show an **error snack bar** or notification when the form is submitted with invalid data.

   8. **Responsive Snack Bar Placement:** Fixed!
      - For **desktop devices**: Display snack bars in the **top-right corner**.
      - For **mobile devices**: Display snack bars at the **bottom of the screen**.

   9. **Write Tests:** Yet to be fixed
      - Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   10. **Timer Persistence:** Fixed!
       - Use **localStorage** to persist timers across page refreshes.

---

