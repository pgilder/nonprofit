Template.AgenciesInsertForm.events({
    'submit form': function(event){
    event.preventDefault();
    var Agency_Name_Var = event.target.Agency_Name.value;
    var Agency_Address_1_Var = event.target.Agency_Address_1.value;
    var Agency_Address_2_Var = event.target.Agency_Address_2.value;
    var Agency_City_Var = event.target.Agency_City.value;
    var Agency_State_Var = event.target.Agency_State.value;
    var Agency_Zipcode_Var = event.target.Agency_Zipcode.value;
    var Agency_Phone_Var = event.target.Agency_Phone.value;
    var Agency_Fax_Var = event.target.Agency_Fax.value;
    var Agency_Email_Var = event.target.Agency_Email.value;
    var Agency_URL_Var = event.target.Agency_URL.value;
    var Agency_Photo_Var = event.target.Agency_Photo.value;
    var Agency_Donation_URL_Var = event.target.Agency_Donation_URL.value;
    var Agency_Donations_Var = event.target.Agency_Donations.value;
    var Agency_Donors_Var = event.target.Agency_Donors.value;
    var Agency_Donation_Amount_Var = event.target.Agency_Donation_Amount.value;
    Nonprofits.insert({
      nonprofitname: Agency_Name_Var,
      address: Agency_Address_1_Var,
      address2: Agency_Address_2_Var,
      city: Agency_City_Var,
      state: Agency_State_Var,
      zipcode: Agency_Zipcode_Var,
      phone: Agency_Phone_Var,
      fax: Agency_Fax_Var,
      email: Agency_Email_Var,
      url: Agency_URL_Var,
      photo: Agency_Photo_Var,
      donationurl: Agency_Donation_URL_Var,
      donations: Agency_Donations_Var,
      donors: Agency_Donors_Var,
      donationamount: Agency_Donation_Amount_Var,
     });
  }
});
