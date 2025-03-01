import { Button, Col } from 'react-bootstrap';


export default function Articles() {

  // const [value, setValue] = React.useState<string>('');
  // const editorRef: any = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current?.getContent());
  //   }
  // };

  // const modules = {
  //   toolbar: [
  //     [{ 'header': [1, 2, false] }],
  //     ['bold', 'italic', 'underline', 'strike'],        // options de texte
  //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //     [{ 'indent': '-1'}, { 'indent': '+1' }],          // indentation
  //     [{ 'align': [] }],
  //     ['link', 'image'],                               // ajout de l'option 'image' ici
  //     ['clean']                                        // bouton pour nettoyer le texte formaté
  //   ],
  // };

  // const formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike',
  //   'list', 'bullet', 'indent',
  //   'align',
  //   'link', 'image'                                  // format pris en charge pour l'image
  // ];

  // const example_image_upload_handler = (blobInfo: any, progress: any) => new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.withCredentials = false;
  //   xhr.open('POST', 'postAcceptor.php');
  
  //   xhr.upload.onprogress = (e) => {
  //     progress(e.loaded / e.total * 100);
  //   };
  
  //   xhr.onload = () => {
  //     if (xhr.status === 403) {
  //       reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
  //       return;
  //     }
  
  //     if (xhr.status < 200 || xhr.status >= 300) {
  //       reject('HTTP Error: ' + xhr.status);
  //       return;
  //     }
  
  //     const json = JSON.parse(xhr.responseText);
  
  //     if (!json || typeof json.location != 'string') {
  //       reject('Invalid JSON: ' + xhr.responseText);
  //       return;
  //     }
  
  //     resolve(json.location);
  //   };
  
  //   xhr.onerror = () => {
  //     reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
  //   };
  
  //   const formData = new FormData();
  //   formData.append('file', blobInfo.blob(), blobInfo.filename());
  
  //   xhr.send(formData);
  // });
  

  return (
    <Col xs={10} className='mt-5 pt-5'>
      <Button
      className='mt-3'
      onClick={() => {
        // console.log(value)
      }}>Log editor content</Button>
  
    </Col>
  )
}
