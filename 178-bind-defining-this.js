class App{
    constructor(){
        this.serverName = 'localhost';

        // Use a class method. If refer to intance of a class append .bind(this))
        document.querySelector('button').addEventListener('click', this.getServerName.bind(this))
    }

    getServerName(){
        console.log(this.serverName)
    }
}


const app = new App();

// app.getServerName()