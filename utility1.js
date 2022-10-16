function readImage(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    $.ajax({
      url: "https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/8adb6e7c-40c2-49a5-ab09-9b2afc65224b/classify/iterations/Iteration1/image",
      data: reader.result,
      processData: false,
      contentType: "application/octet-stream",
      headers: {
        'Prediction-key': '0dd6c5ad3d1f459e9255417083a8931a'
      },
      type: 'POST',
      body: file,
      success: function(response) {
        var result = response["Predictions"];
        alert('Detection is successful.');
      },
      error: function(error) {
        alert('Please upload an image file.');
      }
    });
  }
  reader.readAsArrayBuffer(file);
}