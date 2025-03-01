import React from 'react'

const UpLoadImage = () => {
    const [selectedFile, setSelectedFile] = React.useState<any>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string | null>(null);
    
    const handleChange = (event: any) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        setImagePreviewUrl(reader.result);
      }, false);
    };
  
    async function handleSubmit(event: React.SyntheticEvent) {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
        await fetch('/your-backend-endpoint', {
          method: 'POST',
          body: formData,
        });
        
        // Update local state or perform other necessary operations after successful submission
      } catch (error) {
        console.error('Error submitting image: ', error);
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput">Select an image:</label>
        <input id="fileInput" type="file" accept="image/*" onChange={handleChange} />
        {imagePreviewUrl ? <img src={imagePreviewUrl} alt="Preview" /> : null}
        <button type="submit">Upload</button>
      </form>
    )
}

export default UpLoadImage
