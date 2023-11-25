// Utility function to calculate remaining time until deadline
function calculateRemainingDeadline(deadline = '') {
      const currentTime = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();
      const timeRemaining = deadlineTime - currentTime;
    
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        return {
          days,
          hours,
          minutes,
          seconds,
          expired: false // Indicator to show that the deadline has not yet passed
        };
      } else {
        // If the deadline has passed
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true // Indicator to show that the deadline has passed
        };
      }
    }
    
    export default calculateRemainingDeadline;
    