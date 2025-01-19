// Store the skills data
const skillsData = {
    "Graphic Design": {
        icon: "fas fa-palette",
        description: "Create impactful visual content for non-profit campaigns and materials.",
        details: "Our graphic designers create compelling visuals that help non-profits communicate their message effectively.",
        contributors: [
            {
                name: "Sarah Johnson",
                skills: ["Brand Design", "Social Media Graphics", "Print Design"],
                projects: ["Save the Ocean Campaign", "Youth Education Brochures", "Wildlife Conservation Logo"]
            },
            {
                name: "Michael Chen",
                skills: ["UI Design", "Motion Graphics", "Illustration"],
                projects: ["Green Earth App Design", "Climate Action Animations", "Forest Protection Posters"]
            },
            {
                name: "Emma Wilson",
                skills: ["Package Design", "Editorial Design", "Typography"],
                projects: ["Food Bank Packaging", "Community Newsletter", "Charity Event Materials"]
            }
        ]
    },
    "Web Development": {
        icon: "fas fa-code",
        description: "Build and maintain websites that help organizations reach more people.",
        details: "Our web developers build and maintain responsive, accessible websites that help organizations expand their reach.",
        contributors: [
            {
                name: "David Kumar",
                skills: ["Frontend Development", "React", "Accessibility"],
                projects: ["Animal Shelter Portal", "Donation Platform", "Volunteer Management System"]
            },
            {
                name: "Lisa Park",
                skills: ["Full Stack Development", "Node.js", "Database Design"],
                projects: ["Education Fund Website", "Community Support Hub", "Resource Distribution Platform"]
            },
            {
                name: "James Rodriguez",
                skills: ["WordPress", "PHP", "Web Security"],
                projects: ["Local Food Bank Site", "Environmental Blog", "Healthcare Directory"]
            }
        ]
    },
    "Marketing": {
        icon: "fas fa-bullhorn",
        description: "Develop strategies to increase awareness and engagement for causes.",
        details: "Our marketing experts create comprehensive strategies to boost organization visibility and engagement.",
        contributors: [
            {
                name: "Anna Smith",
                skills: ["Social Media Marketing", "Content Strategy", "Email Campaigns"],
                projects: ["Clean Water Initiative", "Education Access Program", "Community Outreach Campaign"]
            },
            {
                name: "Tom Brown",
                skills: ["Digital Marketing", "SEO", "Analytics"],
                projects: ["Homeless Shelter Awareness", "Mental Health Support", "Elder Care Program"]
            }
        ]
    },
    "Accounting": {
        icon: "fas fa-calculator",
        description: "Help organizations manage their finances and maintain transparency.",
        details: "Our accountants ensure financial health and compliance for non-profit organizations.",
        contributors: [
            {
                name: "Robert Lee",
                skills: ["Financial Analysis", "Budget Planning", "Tax Compliance"],
                projects: ["Youth Center Audit", "Grant Fund Management", "Annual Financial Reports"]
            },
            {
                name: "Maria Garcia",
                skills: ["Bookkeeping", "Grant Accounting", "Financial Reporting"],
                projects: ["Disaster Relief Fund", "Educational Trust", "Community Development Budget"]
            }
        ]
    },
    "Content Writing": {
        icon: "fas fa-pen-fancy",
        description: "Tell compelling stories that inspire action and support.",
        details: "Our writers craft engaging narratives that help organizations share their impact and mission.",
        contributors: [
            {
                name: "Alex Turner",
                skills: ["Storytelling", "Grant Writing", "Blog Writing"],
                projects: ["Children's Literacy Program", "Environmental Impact Report", "Community Success Stories"]
            },
            {
                name: "Sophie Wu",
                skills: ["Technical Writing", "Copywriting", "Social Media Content"],
                projects: ["Healthcare Initiative Blog", "Sustainability Guidelines", "Social Impact Newsletter"]
            }
        ]
    },
    "Legal Advice": {
        icon: "fas fa-balance-scale",
        description: "Provide guidance on compliance and legal matters.",
        details: "Our legal experts help organizations navigate complex regulatory requirements and compliance issues.",
        contributors: [
            {
                name: "William Taylor",
                skills: ["Non-profit Law", "Contract Review", "Regulatory Compliance"],
                projects: ["Animal Rights Policy", "Fair Housing Guidelines", "Volunteer Agreement Templates"]
            },
            {
                name: "Jessica Martinez",
                skills: ["Corporate Law", "Tax Law", "Employment Law"],
                projects: ["Charity Registration", "Grant Compliance Review", "Worker Rights Guide"]
            }
        ]
    }
};

// Create the skill detail page HTML
function createSkillDetailHTML(skillName) {
    const skill = skillsData[skillName];
    const contributorsHTML = skill.contributors
        .map(contributor => `
            <div class="contributor-card">
                <h4>${contributor.name}</h4>
                <div class="skills-list">
                    <h5>Expertise:</h5>
                    <ul>
                        ${contributor.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="projects-list">
                    <h5>Sample Projects:</h5>
                    <ul>
                        ${contributor.projects.map(project => `<li>${project}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

    return `
        <div class="skill-detail-page">
            <button onclick="showSkillsGrid()" class="back-button" aria-label="Back to Skills">
            <i class="fas fa-arrow-left" aria-hidden="true"></i> Back to Skills
            </button>
            <div class="skill-header">
                <i class="${skill.icon}"></i>
                <h2>${skillName}</h2>
            </div>
            <div class="skill-content">
                <p class="skill-description">${skill.details}</p>
                <h3>Active Contributors</h3>
                <div class="contributors-grid">
                    ${contributorsHTML}
                </div>
            </div>
        </div>
    `;
}

// Show the skill detail page
function showSkillDetail(skillName) {
    const skillsSection = document.querySelector('.skills-section');
    skillsSection.innerHTML = createSkillDetailHTML(skillName);
}

// Show the original skills grid
function showSkillsGrid() {
    window.location.reload(); // This will reload the page to show the original grid
}

// Add click event listeners to skill cards
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skillName = this.querySelector('h3').textContent;
            showSkillDetail(skillName);
        });
    });
});
// Keep existing skillsData object the same...

// Create HTML for the contact modal
function createContactModalHTML(contributorName) {
    return `
        <div id="contactModal" class="contact-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Contact ${contributorName}</h3>
                <form id="contactForm" class="contact-form">
                    <div class="form-group">
                        <label for="projectTitle">Project Title</label>
                        <input type="text" id="projectTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="organization">Organization Name</label>
                        <input type="text" id="organization" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Request</button>
                </form>
            </div>
        </div>
    `;
}

function createSkillDetailHTML(skillName) {
    const skill = skillsData[skillName];
    const contributorsHTML = skill.contributors
        .map(contributor => `
            <div class="contributor-card" onclick="showContactModal('${contributor.name}')">
                <h4>${contributor.name}</h4>
                <div class="skills-list">
                    <h5>Expertise:</h5>
                    <ul>
                        ${contributor.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="projects-list">
                    <h5>Sample Projects:</h5>
                    <ul>
                        ${contributor.projects.map(project => `<li>${project}</li>`).join('')}
                    </ul>
                </div>
                <div class="contact-prompt">
                    <i class="fas fa-envelope"></i> Click to send request
                </div>
            </div>
        `).join('');

    return `
        <div class="skill-detail-page">
            <button onclick="showSkillsGrid()" class="back-button">
                <i class="fas fa-arrow-left"></i> Back to Skills
            </button>
            <div class="skill-header">
                <i class="${skill.icon}"></i>
                <h2>${skillName}</h2>
            </div>
            <div class="skill-content">
                <p class="skill-description">${skill.details}</p>
                <h3>Active Contributors</h3>
                <div class="contributors-grid">
                    ${contributorsHTML}
                </div>
            </div>
        </div>
    `;
}

// Show contact modal
function showContactModal(contributorName) {
    // Remove any existing modal
    const existingModal = document.getElementById('contactModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to the page
    document.body.insertAdjacentHTML('beforeend', createContactModalHTML(contributorName));

    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('contactForm');

    // Show modal
    modal.style.display = 'block';

    // Close modal when clicking X
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    form.onsubmit = function(e) {
        e.preventDefault();
        
        // Get form values
        const projectTitle = document.getElementById('projectTitle').value;
        const organization = document.getElementById('organization').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to your server
        console.log('Request sent:', {
            contributor: contributorName,
            projectTitle,
            organization,
            email,
            message
        });

        // Show success message
        alert('Request sent successfully! The contributor will contact you soon.');
        modal.style.display = 'none';
    }
}

// Keep existing showSkillDetail, showSkillsGrid, and event listener functions...