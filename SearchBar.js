<script>
    document.getElementById('search-button').addEventListener('click', function() {
        let searchInput = document.getElementById('search-input').value.toLowerCase();
        let pageContent = document.body.innerText.toLowerCase();

        // Remove existing highlights
        let highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            highlight.classList.remove('highlight');
        });

        if (searchInput) {
            let regex = new RegExp(searchInput, 'gi');
            let matches = [...document.body.innerHTML.matchAll(regex)];

            matches.forEach(match => {
                document.body.innerHTML = document.body.innerHTML.replace(match[0], `<span class='highlight'>${match[0]}</span>`);
            });
        }
    });

    // Optional: Add functionality to search on 'Enter' key press
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-button').click();
        }
    });
</script>