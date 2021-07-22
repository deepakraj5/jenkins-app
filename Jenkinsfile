pipeline {

	agent any
	
	stages {
	
		
		stage('restart the pm2 server') {
			steps {
				sh "sudo -i"
				sh "pm2 restart app"
			}
		}


	}

}
