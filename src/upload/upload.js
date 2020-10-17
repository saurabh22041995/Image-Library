import React    from "react";
import template from "./upload.jsx";
import axios from "axios";

class upload extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedFile: null,
      imageUrls:[]
    }
  }

  componentDidMount(){
    axios.get("http://localhost:8000/Upload", {
      headers: {
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res=>{
      let imageUrls = []
      for(let image = 0; image<res.data.length; image++){
        var arrayBufferView = new Uint8Array( res.data[image].img.data.data );
        var blob = new Blob( [ arrayBufferView ], { type: res.data[image].img.contenType });
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
        imageUrls.push(imageUrl)
        this.setState({imageUrls})
      }
      
    })
    .catch((err)=>{
      console.log("dsfsdf ",err);
    })
  }

  onFormSubmit = async (e)=>{
    e.preventDefault();
    let formData = new FormData()
    formData.append('file', this.state.selectedFile, this.state.selectedFile.name)
    axios.post("http://localhost:8000/Upload",formData, {
      headers: {
        'Content-Type':'multipart/form-data'
      }
    })
        .then((res) => {
            let imageUrls = []
            for(let image = 0; image<res.data.length; image++){
              var arrayBufferView = new Uint8Array( res.data[image].img.data.data );
              var blob = new Blob( [ arrayBufferView ], { type: res.data[image].img.contenType });
              var urlCreator = window.URL || window.webkitURL;
              var imageUrl = urlCreator.createObjectURL( blob );
              imageUrls.push(imageUrl)
              this.setState({imageUrls})
            }
        }).catch((error) => {
          console.log("=========",error);
    });
}

  fileSelectedHandler = async (e) => {
    await this.setState({
      selectedFile:e.target.files[0]
    })
    console.log(this.state.selectedFile);
  }


  render() {
    return template.call(this);
  }
}

export default upload;
