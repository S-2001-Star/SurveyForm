function result()
{
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value;
    var Gender = document.querySelector("input[name= 'gender']:checked");
    var Profession = document.getElementById('Profession').value;
    var Email = document.getElementById('Email').value;
    var Contact = document.getElementById('Contact').value;
    var message = " First Name : " +firstName+"\n Last Name : "+lastName+"\n Date of Birth : "+birthdate;
    if (country)
    {
        message += "\n Country : "+country;
    }
    if(Gender)
    {
        message +="\n Gender : "+Gender.value;
    }
    message+="\n Profession : "+Profession+"\n Email : "+Email+"\n Contact : "+Contact;
    alert(message);
}