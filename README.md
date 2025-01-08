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

## **Completed Tasks**

   1. **Match the UI:** Fixed!
      Added some missing CSS classes and matched the expected UI
      - Ensure the app's UI matches the given **screenshots**.
      - <img width="250" alt="Screenshot 2024-12-03 at 8 30 53 PM" src="https://github.com/user-attachments/assets/59782304-c254-4d87-9fac-7f92c15bbc6f">
      - <img width="250" alt="Screenshot 2024-12-03 at 3 29 25 PM" src="https://github.com/user-attachments/assets/9bb429ff-cd78-4411-b222-9d947c3ae79b">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 04 PM" src="https://github.com/user-attachments/assets/a26e8ec7-7e00-4964-8f61-651945f4bbd1">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 30 PM" src="https://github.com/user-attachments/assets/a513a462-540f-45e7-8ac0-0890995ec82d">


   3. **Simultaneous Timers:** Fixed!
      - Fixed! Now the timer app supports multiple timers.

   4. **Snack Bar Behavior:** Yet to be fixed
      - When a timer is completed:
        - A snack bar notification should display.
        - The notification sound should keep playing until the snack bar is dismissed.

   5. **Fix Snack Bar Console Error:** Yet to be fixed
      - Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   6. **Extract Common Components:** Yet to be fixed
      - Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
      - Replace all instances of similar buttons in the app with this component.

   7. **Consolidate Modal Code:** Yet to be fixed
      - Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   8. **Validation Snack Bars:** Yet to be fixed
      - Currently, the **Submit button** is disabled when the form is invalid.
      - Show an **error snack bar** or notification when the form is submitted with invalid data.

   9. **Responsive Snack Bar Placement:** Yet to be fixed
      - For **desktop devices**: Display snack bars in the **top-right corner**.
      - For **mobile devices**: Display snack bars at the **bottom of the screen**.

   10. **Write Tests:** Yet to be fixed
      - Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   11. **Timer Persistence:** Yet to be fixed
       - Use **localStorage** to persist timers across page refreshes.

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

---

## **Evaluation Criteria**

You will be evaluated on the following points:

1. **UI Matching:**
   - The app's UI should match the provided screenshots.

2. **Code Quality:**
   - Clean, modular, and readable code.
   - Avoid code duplication and ensure reusable components are implemented.

3. **Functionality:**
   - Simultaneous timers, snack bar notifications, and localStorage persistence should work seamlessly.

4. **State Management:**
   - Effective use of React hooks or Context API for managing state.

5. **Testing:**
   - Comprehensive unit and component tests, especially for validation logic and reusable components.

6. **Error Handling:**
   - Resolve the existing snack bar console error and provide meaningful feedback to users for invalid forms.

7. **Responsiveness:**
   - Snack bar placement should adapt based on device type (desktop vs. mobile).

8. **Commit Messages:**
   - Follow **conventional commit standards** (e.g., `feat:`, `fix:`, `refactor:`).

---

## **Deliverables**

1. A **GitHub repository link** to your completed project (forked from the original repo).  
2. Include a `README.md` describing:  
   - Steps to run your project.  
   - Any additional changes or enhancements you made.  

---

## **Time Constraint**

You are expected to complete this assignment in **4 hours** of focused effort.  

---

## **Contact**

If you have any questions or issues, feel free to reach out via the provided contact channels in the repository.

Good luck! 🚀
