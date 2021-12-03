<?php

$message_sent = false;
ini_set('display_errors', 1);
error_reporting(E_ALL);
if (isset($_POST['mail']) && $_POST['mail'] != '') {

    if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {

        $userName = $_POST['name'];
        $userEmail = $_POST['mail'];
        $messageSubject = $_POST['subject'];
        $message = $_POST['message'];

        $to = "mumbaihealthproject@gmail.com";         // Change the "To" mail id 
        $body = "<html>
    <head>
    <title>Message From Contact Us page</title>
    </head>
    <body>
    <h2>From: " . $userName . "</h2>
    <p>Email: " . $userEmail . "</p>
    <p>" . $message . "</p>
    </body>
    </html>";
        $from = "support@mumbaihealthproject.com";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From:" . $from;
        mail($to, $messageSubject, $body, $headers);

        $message_sent = true;
    }
}
?>



<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <meta /> -->
    <meta charset="UTF-8" name="description" content=" -A non-profit initiative dedicated towards equalising healthcare services in a city riddled with inequalities" />
    <title>Mumbai health project</title>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
</head>

<body class="square-grid full-size">
    <!-- Header starts -->
    <header class="site-header bg-white">
        <div class="wrapper site-header__wrapper">
            <img class="brand" src="images\logo_V1.jpg" style="width: 60px; margin: auto; margin-bottom: 2px" />
            <a href="./index.html" style="margin-bottom: 0rem" class="brand">MUMBAI HEALTH PROJECT FOUNDATION</a>
            <nav class="nav">
                <button class="nav__toggle" aria-expanded="false" type="button">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav__wrapper">
                    <li class="nav__item"><a href="./about_us.html">Soch</a></li>
                    <!-- <li class="line_ver"></li> -->
                    <li class="nav__item"><a href="./seekh.html">Seekh</a></li>
                    <!-- <li class="line_ver"></li> -->
                    <!-- <li class="nav__item"><a href="./samaaj.html">Samaaj</a></li> -->
                    <!-- <li class="line_ver"></li> -->
                    <!-- <li class="nav__item"><a href="./support_us.html">Support</a></li> -->
                    <!-- <li class="line_ver"></li> -->
                    <li class="nav__item">
                        <a href="./contact_us.php">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <!--Header Ends Here  -->

    <?php
    if ($message_sent) {


    ?>

        <h1 style="text-align: center;">Thanks, <?php echo "$userName"; ?>, We will get in touch very soon with you !!</h1>

        <div class="container" style="display: flex; flex-wrap: wrap">



            <div class="leftside">
                <form class="contact-form" action="contact_us.php" method="post">
                    <h1 class="c_us">Contact Us</h1>
                    <input type="text" id="txt_input" name="name" placeholder="Full name" required />
                    <br />
                    <input type="text" id="txt_input" name="mail" placeholder="your e-mail" required /><br />
                    <input type="text" id="txt_input" name="subject" placeholder="subject" required /><br />
                    <textarea name="message" placeholder="Message" id="message_area"></textarea><br />

                    <button type="submit" class="btn" name="submit">Send E-mail</button>
                </form>
            </div>

        <?php
    } else {
        ?>
            <div class="container" style="display: flex; flex-wrap: wrap">



                <div class="leftside">
                    <form class="contact-form" action="contact_us.php" method="post">
                        <h1 class="c_us">Contact Us</h1>
                        <input type="text" id="txt_input" name="name" placeholder="Full name" />
                        <br />
                        <input type="text" id="txt_input" name="mail" placeholder="your e-mail" /><br />
                        <input type="text" id="txt_input" name="subject" placeholder="subject" /><br />
                        <textarea name="message" placeholder="Message" id="message_area"></textarea><br />

                        <button type="submit" class="btn" name="submit">Send E-mail</button>
                    </form>
                </div>

            <?php
        };
            ?>


            <div class="rightside">
                <img src="images/letter.jpg" alt="mumbai_map" class="mum_map" />
            </div>
            </div>

            <!-- Footer  starts here -->
            <footer class="footer">
                <div class="container-footer">
                    <div class="row">
                        <div class="footer-col">
                            <h2 class="logo-text">Mumbai Health Project</h2>
                            <p>242 Geeta Nagar Navy Nagar</p>
                            <p>Colaba Mumbai 400005</p>
                        </div>
                        <div class="footer-col" id="logo_foot">
                            <div class="socials">
                                <h4>Follow Us</h4>
                                <a href="https://www.facebook.com/hargullyhealthy"><i class="fab fa-facebook"></i></a>
                                <a href="https://instagram.com/mumbaihealthproject?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                <a href="https://twitter.com/hargullyhealthy?s=11"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/company/mumbai-health-project/"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <div class="contact">
                                <h4>Contact us</h4>
                                <a href="tel:+91-9769949470"><i class="ico fa fa-phone"></i> &nbsp; +91-9769949470</a>
                                <a href="mailto:support@mumbaihealthproject.com"><i class="ico fa fa-envelope"></i>&nbsp;
                                    support@mumbaihealthproject.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="row author_name">
                        <div>
                            <span style="font-size: 10px">&#169; Developed by
                                <a href="https://www.linkedin.com/in/bhavjot-singh/" target="_blank">
                                    Bhavjot Singh</a>
                                &
                                <a href="https://github.com/rishiarya09">Rishi Arya Juturu</a></span>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Footer ends here -->

            <script type="text/javascript" src="./main.js"></script>
</body>

</html>