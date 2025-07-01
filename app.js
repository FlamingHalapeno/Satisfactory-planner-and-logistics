// App initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('App loaded');
    
    const pageContent = document.getElementById('page-content');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Load page content
    async function loadPage(pageName) {
        try {
            const response = await fetch(`${pageName}.html`);
            const html = await response.text();
            pageContent.innerHTML = html;
            
            // Initialize page-specific functionality
            if (pageName === 'calculator') {
                initializeCalculator();
            }
        } catch (error) {
            console.error(`Error loading ${pageName} page:`, error);
            pageContent.innerHTML = `<div class="error">Error loading ${pageName} page</div>`;
        }
    }
    
    // Initialize calculator functionality
    function initializeCalculator() {
        // Action button handlers
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all action buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const action = button.classList.contains('summary') ? 'summary' : 'reset';
                console.log(`Calculator action: ${action}`);
            });
        });
        
        // Control button handlers
        const controlButtons = document.querySelectorAll('.control-btn');
        controlButtons.forEach(button => {
            button.addEventListener('click', () => {
                const control = button.classList.contains('inputs-outputs') ? 'inputs-outputs' :
                               button.classList.contains('recipes') ? 'recipes' : 'limitations';
                console.log(`Calculator control: ${control}`);
                // Toggle button state or open modal/panel
                button.classList.toggle('active');
            });
        });
        
        // Add to game button
        const addToGameBtn = document.querySelector('.add-to-game-btn');
        if (addToGameBtn) {
            addToGameBtn.addEventListener('click', () => {
                console.log('Add to game clicked');
                // Add visual feedback
                addToGameBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    addToGameBtn.style.transform = 'scale(1)';
                }, 100);
            });
        }
        
        // Delete button
        const deleteBtn = document.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                console.log('Delete clicked');
                // Add visual feedback
                deleteBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    deleteBtn.style.transform = 'scale(1)';
                }, 100);
            });
        }
        
        // Settings button
        const settingsBtn = document.querySelector('.settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                console.log('Settings clicked');
                settingsBtn.classList.toggle('active');
            });
        }
    }
    
    // Handle navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageName = button.dataset.page;
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Load page content
            loadPage(pageName);
        });
    });
    
    // Load default page (factories)
    loadPage('factories');
}); 