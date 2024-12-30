// Homepage Carousel 
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})

// Display Pricing

function displayPricing() {
    const daySelect = document.getElementById('daySelect').value;
    const timeSelect = document.getElementById('timeSelect').value;
    const pricingDetails = document.getElementById('pricingDetails');

    let pricingData = {
        weekday: {
            morning: `
                <h2>Morning Weekday Rates (Until 2PM)</h2>
                <ul>
                    <li>$42.00 (18 holes w/ cart)</li>
                    <li>$30.00 (9 holes w/ cart)</li>
                    <li>$32.00 (18 holes walking)</li>
                    <li>$25.00 (9 holes walking)</li>
                </ul>
                <br>
                <h2>Senior (60+) Weekdays Only</h2>
                <ul>
                    <li>$35.00 (18 holes w/ cart)</li>
                    <li>$25.00 (9 holes w/ cart)</li>
                    <li>$24.00 (18 holes walking)</li>
                    <li>$21.00 (9 holes walking)</li>
                </ul>
            `,
            twilight: `
                <h2>Twilight Weekday Rates (After 2PM)</h2>
                <ul>
                    <li>$38.00 (18-holes w/ cart)</li>
                    <li>$27.00 (9-holes w/ cart)</li>
                    <li>$29.00 (18 holes walking)</li>
                    <li>$24.00 (9 holes walking)</li>
                </ul>
                <br>
                <h2>Senior (60+) Weekdays Only</h2>
                <ul>
                    <li>$35.00 (18 holes w/ cart)</li>
                    <li>$25.00 (9 holes w/ cart)</li>
                    <li>$24.00 (18 holes walking)</li>
                    <li>$21.00 (9 holes walking)</li>
                </ul>
            `
        },
        weekend: {
            morning: `
                <h2>Weekend & Holiday Rates (Until 2PM)</h2>
                <ul>
                    <li>$52.00 (18 holes w/ cart)</li>
                    <li>$38.00 (9 holes w/ cart)</li>
                    <li>$41.00 (18 holes walking)</li>
                    <li>$30.00 (9 holes walking)</li>
                </ul>
            `,
            twilight: `
                <h2>Weekend & Holiday Twilight Rates (After 2PM)</h2>
                <ul>
                    <li>$42.00 (18 holes w/ cart)</li>
                    <li>$31.00 (9 holes w/ cart)</li>
                    <li>$34.00 (18 holes walking)</li>
                    <li>$26.00 (9 holes walking)</li>
                </ul>
            `
        }
    };

    if (daySelect && timeSelect) {
        if (pricingData[daySelect] && pricingData[daySelect][timeSelect]) {
            pricingDetails.innerHTML = pricingData[daySelect][timeSelect];
        } else {
            pricingDetails.innerHTML = "No pricing available for the selected day and time.";
        }
    } else {
        pricingDetails.innerHTML = "Please select both day and time.";
    }

    pricingDetails.innerHTML = pricingData[daySelect][timeSelect];
    pricingDetails.style.display = 'block';
}



// Pricing Toggle

function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
}


// Display Membership 
function displayMembershipDetails() {
  const membershipSelect = document.getElementById('membershipSelect');
  const membershipDetails = document.getElementById('membershipDetails');
  
  const membershipData = {
      senior: {
          title: "Senior Membership",
          price: "$870",
          duration: "Annual (January-December)",
          description: "Single Membership for a Senior (60 plus), entitles owner greens fees for a full year & discounted cart rental rates."
      },
      single: {
          title: "Single Membership",
          price: "$980",
          duration: "Annual (January-December)",
          description: "Single Membership entitles owner greens fees and discounted cart rental rates for a full year."
      },
      family: {
          title: "Family Membership",
          price: "$1320",
          duration: "Annual (January-December)",
          description: "Family membership (For parents and their legal dependents) green fees for a full year & discounted cart rental rates."
      },
      student: {
        title: "Student Membership",
        price: "$525",
        duration: "Annual (January-December)",
        description: "Student membership requires 12+ credit hours, it entitles owner to greens fees and discounted cart rental rates for a full year."
      },
      weekday: {
        title: "Weekday Membership",
        price: "$830",
        duration: "Annual (January-December)",
        description: "Weekday membership entitles owner to green fees and discounted cart rental rates Monday through Friday (excluding holidays) for a full year."
      },
      couple: {
        title: "Senior Couple Membership",
        price: "$1045",
        duration: "Annual (January-December)",
        description: "Single couple membership for 2 senior partners (60 years plus), entitles owners to greens fees for a full year & discounted cart rental rates."
      },
      parent: {
        title: "Parent & Child Membership",
        price: "$1160",
        duration: "Annual (January-December)",
        description: "Parent & Child Membership is valid for 1 parent & 1 child. Includes green fees for a full year & discounted cart rental rates."
      },
  };

  const selectedMembership = membershipData[membershipSelect.value];

  if (selectedMembership) {
      membershipDetails.innerHTML = `
          <h2>${selectedMembership.title}</h2>
          <p><strong>Price:</strong> ${selectedMembership.price}</p>
          <p><strong>Duration:</strong> ${selectedMembership.duration}</p>
          <p><strong>Description:</strong> ${selectedMembership.description}</p>
      `;
  } else {
      membershipDetails.innerHTML = '';
  }

  membershipDetails.style.display = 'block';

}

