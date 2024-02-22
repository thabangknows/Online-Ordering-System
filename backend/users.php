<?php











if(isset($_POST['add_user'])){
    
    
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    if($password != $cpassword){
        header('location: /signup.php?error=Passwords do not match');
    }




}



?>