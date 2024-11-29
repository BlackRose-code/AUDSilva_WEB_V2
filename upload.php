<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$response = array();
$upload_dir = "assets/";
$allowed_extensions = array("jpg", "jpeg", "png", "mp3", "wav");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_FILES["file"])) {
        $file = $_FILES["file"];
        $file_extension = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
        
        // Check if file extension is allowed
        if (in_array($file_extension, $allowed_extensions)) {
            // Create directories if they don't exist
            $target_dir = $upload_dir;
            if ($file_extension == "mp3" || $file_extension == "wav") {
                $target_dir .= "tracks/";
            } else {
                $target_dir .= "certificates/";
            }
            
            if (!file_exists($target_dir)) {
                mkdir($target_dir, 0777, true);
            }
            
            // Generate unique filename
            $new_filename = uniqid() . "." . $file_extension;
            $target_file = $target_dir . $new_filename;
            
            // Move uploaded file
            if (move_uploaded_file($file["tmp_name"], $target_file)) {
                $response["success"] = true;
                $response["message"] = "File uploaded successfully";
                $response["file_url"] = $target_file;
            } else {
                $response["success"] = false;
                $response["message"] = "Error uploading file";
            }
        } else {
            $response["success"] = false;
            $response["message"] = "Invalid file type. Allowed types: " . implode(", ", $allowed_extensions);
        }
    } else {
        $response["success"] = false;
        $response["message"] = "No file uploaded";
    }
} else {
    $response["success"] = false;
    $response["message"] = "Invalid request method";
}

echo json_encode($response);
?>
