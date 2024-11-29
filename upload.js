// File upload handling
document.addEventListener('DOMContentLoaded', function() {
    // Certificate upload handling
    const certificateInputs = document.querySelectorAll('.certificate-upload');
    certificateInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                uploadFile(file, 'certificate');
            }
        });
    });

    // Track upload handling
    const trackInput = document.querySelector('.track-upload');
    if (trackInput) {
        trackInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                uploadFile(file, 'track');
            }
        });
    }
});

function uploadFile(file, type) {
    const formData = new FormData();
    formData.append('file', file);

    // Show loading indicator
    const loadingElement = document.createElement('div');
    loadingElement.className = 'upload-loading';
    loadingElement.textContent = 'Uploading...';
    document.body.appendChild(loadingElement);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update UI based on file type
            if (type === 'certificate') {
                updateCertificateImage(data.file_url);
            } else if (type === 'track') {
                updateTrackSource(data.file_url);
            }
            showNotification('File uploaded successfully!', 'success');
        } else {
            showNotification(data.message, 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error uploading file', 'error');
    })
    .finally(() => {
        // Remove loading indicator
        document.body.removeChild(loadingElement);
    });
}

function updateCertificateImage(url) {
    // Find the nearest empty certificate slot and update it
    const certificates = document.querySelectorAll('.certificate-image img[src="assets/cert1.jpg"], .certificate-image img[src="assets/cert2.jpg"], .certificate-image img[src="assets/cert3.jpg"]');
    for (let cert of certificates) {
        if (cert.src.includes('cert')) {
            cert.src = url;
            break;
        }
    }
}

function updateTrackSource(url) {
    const audioPlayer = document.querySelector('.music-player audio');
    if (audioPlayer) {
        audioPlayer.src = url;
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
