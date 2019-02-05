# Initial project set up

For this tutorial to worked you have to follow this basic steps:

1. Download and install [Node JS](https://nodejs.org/en/)
2. Download and install your favorite IDE
3. Access a comand prompt and install package "Create React App" using npm:

    ```shell
    npm install create-react-app -g
    ```

5. Move to the directory where you want to initialize your React application and run this command:

    ```shell
    cd "PATH_TO_YOUR_APPLICATION_FOLDER"
    create-react-app NAME_OF_APP
    ```

    This will create a new React App on the specify folder, it may takes sevelar minutes for npm to download all the js libraries that the proyect requires. After it is finished, you will see 
    a message like this:

    ![npm create-react-app result](../Images/npm-create-react-app.PNG?raw=true "Create react app result")

6. To start your React app, you must move inside the folder created by the comnand where the package.json file is located.

7. Once inside you have to run the command

    ```shell
    cd "PATH_TO_YOUR_APPLICATION_FOLDER"
    npm start
    ```
    Once the development server and the task is excecuted, you shall not close this command console, so the process can 
    continue running. You will get something like this:

    ![npm start](../Images/npm-start-running.PNG?raw=true "npm start command running")

8. Finally open a browser and go to the local address the console shows, you should be granted with something like this:

    ![react app running](../Images/react-app-running.PNG?raw=true "React App Running")

# Understanding the Folder Structure

node_modules | public        | src | package.json     
------------ | ------------- | --- | -------------
Content from cell 1 | Content from cell 2

![folder structure](../Images/basic-folder-structure.PNG?raw=true "Basic React App Folder Structure")