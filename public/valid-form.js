$(document).ready(function (){



$('#contact').validate({

    rules: {
        Name: {
            required: true,
            minlenght: 5,
        },
        Email: {
            required: true,
            email: true,
        },
        Message: {
            required: true,
            minlenght: 10,
        }
    },


    messages: {
        Name: {
            required: "Please enter your Name",
        },
        Email: {
            required: "Please enter email address",
            email: "Please enter a valid email address",
        },
        Message: {
            required: "Please enter your message",
        }
    },
});
});
