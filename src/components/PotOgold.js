/* =================================
  This is the MementoCRM Component
==================================== */
import React,{Component} from 'react';
import FuncImage from '../img/functions.png';
import PostmanPut from '../img/postmanPutRequest.png';
import PutReqLogic from '../img/putRequestLogic.png';
import AzureDiagram from '../img/azureProject.png';
import ImagePostRe from '../img/imagePostRe.png';
import CodePostRe from '../img/postRequest.png';
import BlobImage from '../img/blobStorage.png';
import ResultBlob from '../img/exampleImage.png';
import '../css/PotOgold.css';

class PotOgold extends Component {
    render(){
      return (
        <div className="potogold">
            <h2>Pot O' Gold</h2>
            <p></p>
              <p>
              Working on the Pot O' Gold practicum winter 2020 was an incredible experience.  
              I was part of the back-end team, and I learned a lot of Cloud Computer fundamentals. 
              We worked with serverless Azure functions apps to develop API calls.
              </p>
              <p>
              My first task on this project was to create an Azure Stream Analytics that will handle some 
              of the information coming from the IoT (smart coffee machine).
              </p>
              <p>
              The second task was to develop the logic for the function app that will handle a PUT HTTP 
              request. The goal here was to send the request with the machine information that the 
              person wishes to update in the SQL database. Because we had to follow naming 
              conventions in software development, I name it jos-rg-fun-usw2-task62.
              </p>
              <img src={FuncImage} alt="Functions" />
              <p>
              We use the Postman to send HTTP requests, and I fell in love with this tool.
              </p>
              <img src={PostmanPut} alt="Postman Put Request" />
              <p>
              The code development was one of the things I need to make sure that will work properly for handling the incoming requests.
              The code accesses the json body from the request and it also queries it to the database.
              </p>
              <img src={PutReqLogic} alt="Put Request Code" />
              <p>
              As you can see, I created a few Key-Vault services to store the credentials from the database 
              and blob storage. The only thing I'm doing in the code is referencing the key-vaults so 
              I can access the credentials. This way, we don't need to have hardcoded credentials in
              the logic. You can see this under the connection string section.
              </p>
              <img src={AzureDiagram} alt="Diagram"/>
              <p>
                This is a diagram example that explains how key-vault service works which is also 
                consider cloud security.
              </p>
              <p>
              Another task was to create a new Azure function that will handle a POST request. 
              We needed to save the coffee machines images in the blob storage that will later be 
              referenced from the SQL database. I really liked the task since we had to encode the 
              image to base64 and send it as part of the JSON body.
              </p>
              <img src={ImagePostRe} alt="imagePost request"/>
              <p>
              The function code handles this base64 encoded JSON data and decodes it to bytes so we can 
              store it in the blob storage. The connection string is almost the same as the SQL database, 
              but this time, the blob storage requires multiple secretes for the connection string. 
              </p>
              <img src={CodePostRe} alt="post request"/>
              <p>
              Then we could check the blob storage to see if the image was successfully stored.
              </p>
              <img src={BlobImage} alt="example" />
              <p>
                Finally, copying the image linke and past it in the browser to see the results.
              </p>
              <img src={ResultBlob} alt="resoult." />
              <p>
              Because this is a private repository, I won't be able to share more details but 
              I'm always happy to answer any questions if need them.
              </p>
        </div>
      );
    }
}

export default PotOgold;
