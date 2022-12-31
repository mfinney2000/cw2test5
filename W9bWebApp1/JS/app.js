//The URIs of the REST endpoint
IUPS = "https://prod-06.ukwest.logic.azure.com:443/workflows/5f4ac686135f4273afa3c71ff5800ac5/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I8rZcPoqrvsmOvnCeAkecQIo2BBCwHYsLpJfUzrjBYs";
RAI = "https://prod-08.ukwest.logic.azure.com:443/workflows/f86c22a4f09b4a998a552d604067e41e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jvWp1hYc4Ec5mOwuz1Anm4V-jS06gFdn4vVF-xZkYVw";
//SQLRAI = "https://prod-18.ukwest.logic.azure.com:443/workflows/84fa5038c60b4da297118ab2d11a4c28/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=45YTTNmWzdU400Pm1zmkB_QIprV-vilwtqeFunCqaV8";
RAISEARCH = "https://prod-09.ukwest.logic.azure.com:443/workflows/d0ddb3e9e1584637980e8cdba69857d7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=V3lwcazINGvNBgJVJHuJxGlz4T3ysMIuI28FbJzzkTc";

BLOB_ACCOUNT = "https://blobstoragecoursework2.blob.core.windows.net";

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retImages").click(function(){

      //Run the get asset list function
      getImages();

      //Replace the current HTML in that div with a loading message
      $('#ImageList').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');
      $.getJSON(RAI, function( data ) {

      //Create an array to hold all the retrieved assets
      var items = [];
      
      //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
      $.each( data, function( key, val ) {

      items.push( "<hr />");
      items.push(" <video width='500' height='400' controls>");
      items.push(" <source src=" + BLOB_ACCOUNT + val["filepath"] + " /> <br />");
      items.push(" </video>");
      items.push(" <br>");
      items.push( "File : " + val["fileName"] + "<br />");
      items.push( "Uploaded by: " + val["userName"] + " (user id: "+val["userID"]+")<br />");
	    items.push( "videoID: " + val["videoID"] + "<br />");
      items.push( "video TITLE: " + val["videoTITLE"] + "<br />");
	    items.push( "video PRODUCER: " + val["videoPRODUCER"] + "<br />");
      items.push( "video PUBLISHER: " + val["videoPUBLISHER"] + "<br />");
	    items.push( "video GENRE: " + val["videoGENRE"] + "<br />");
	    items.push( "video AGERATING: " + val["videoAGERATING"] + "<br />");
	    items.push( "video LIKES: " + val["videoLIKES"] + "<br />");
	    items.push( "video DISLIKES: " + val["videoDISLIKES"] + "<br />");
      items.push( "<hr />");


      });


      //Clear the assetlist div 
      $('#ImageList').empty();


      //Append the contents of the items array to the ImageList Div
      $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
      }).appendTo( "#ImageList" );
      });



  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewAsset();
    
  }); 
});

//A function to submit a new asset to the REST endpoint 
function submitNewAsset(){

  //Create a form data object
  submitData = new FormData();

  //Get form variables and append them to the form data object
  submitData.append('FileName', $('#FileName').val());
  submitData.append('userID', $('#userID').val());
  submitData.append('userName', $('#userName').val());
  submitData.append('File', $("#UpFile")[0].files[0]);
  submitData.append('videoID', $('#videoID').val());
  submitData.append('videoTITLE', $('#videoTITLE').val());
  submitData.append('videoPRODUCER', $('#videoPRODUCER').val());
  submitData.append('videoPUBLISHER', $('#videoPUBLISHER').val());
  submitData.append('videoGENRE', $('#videoGENRE').val());
  submitData.append('videoAGERATING', $('#videoAGERATING').val());
  submitData.append('videoLIKES', $('#videoLIKES').val());
  submitData.append('videoDISLIKES', $('#deoDISLIKES').val());
  
  //Post the form data to the endpoint, note the need to set the content type header
  $.ajax({
  url: IUPS,
  data: submitData,
  cache: false,
  enctype: 'multipart/form-data',
  contentType: false,
  processData: false,
  type: 'POST',
  success: function(data){
  
  }
  });
 

}

//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getImages(){

 
}



//NEW STUFF  NEW STUFF NEW STUFF

//Handlers for button clicks
$(document).ready(function() {

 
  $("#retImages2").click(function(){

      //Run the get asset list function
      getImages2();

      //Replace the current HTML in that div with a loading message
      $('#ImageList2').html('<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>');
      $.getJSON(RAISEARCH, function( data ) {

      //Create an array to hold all the retrieved assets
      var items2 = [];
      
      //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
      $.each( data, function( key, val ) {

      items2.push( "<hr />");
      items2.push(" <video width='500' height='400' controls>");
      items2.push(" <source src=" + BLOB_ACCOUNT + val["filepath"] + " /> <br />");
      items2.push(" </video>");
      items2.push(" <br>");
      items2.push( "File : " + val["fileName"] + "<br />");
      items2.push( "Uploaded by: " + val["userName"] + " (user id: "+val["userID"]+")<br />");
	    items2.push( "videoID: " + val["videoID"] + "<br />");
      items2.push( "video TITLE: " + val["videoTITLE"] + "<br />");
	    items2.push( "video PRODUCER: " + val["videoPRODUCER"] + "<br />");
      items2.push( "video PUBLISHER: " + val["videoPUBLISHER"] + "<br />");
	    items2.push( "video GENRE: " + val["videoGENRE"] + "<br />");
	    items2.push( "video AGERATING: " + val["videoAGERATING"] + "<br />");
	    items2.push( "video LIKES: " + val["videoLIKES"] + "<br />");
	    items2.push( "video DISLIKES: " + val["videoDISLIKES"] + "<br />");
      items2.push( "<hr />");


      });


      //Clear the assetlist div 
      $('#ImageList2').empty();


      //Append the contents of the items array to the ImageList Div
      $( "<ul/>", {
      "class": "my-new-list2",
      html: items2.join( "" )
      }).appendTo( "#ImageList2" );
      });



  }); 

   //Handler for the new asset submission button
  $("#subNewForm").click(function(){

    //Execute the submit new asset function
    submitNewAsset();
    
  }); 
});

//A function to submit a new asset to the REST endpoint 
function submitNewAsset(){

  //Create a form data object
  submitData = new FormData();

  //Get form variables and append them to the form data object
  submitData.append('FileName', $('#FileName').val());
  submitData.append('userID', $('#userID').val());
  submitData.append('userName', $('#userName').val());
  submitData.append('File', $("#UpFile")[0].files[0]);
  submitData.append('videoID', $('#videoID').val());
  submitData.append('videoTITLE', $('#videoTITLE').val());
  submitData.append('videoPRODUCER', $('#videoPRODUCER').val());
  submitData.append('videoPUBLISHER', $('#videoPUBLISHER').val());
  submitData.append('videoGENRE', $('#videoGENRE').val());
  submitData.append('videoAGERATING', $('#videoAGERATING').val());
  submitData.append('videoLIKES', $('#videoLIKES').val());
  submitData.append('videoDISLIKES', $('#deoDISLIKES').val());
  
  //Post the form data to the endpoint, note the need to set the content type header
  $.ajax({
  url: IUPS,
  data: submitData,
  cache: false,
  enctype: 'multipart/form-data',
  contentType: false,
  processData: false,
  type: 'POST',
  success: function(data){
  
  }
  });
 

}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getImages2(){

 
}