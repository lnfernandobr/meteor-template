# Meteor Template

This is a Meteor template that comes with pre-configured Accounts and Routes to help you start a new project quickly.

### Preview

This page serves both as a sign-in and sign-up platform, designed with simplicity and functionality in mind. Feel free to customize and enhance it according to your preferences.

![Image Preview](public/images/page-screen.png)



### Features
This template includes the following pre-configured routes:

* Tailwind CSS Integration: Utilize the power of Tailwind CSS to style your application effortlessly. Tailwind CSS provides a highly customizable and responsive CSS framework, giving you full control over your app's visual design.
* Complete Accounts System: The template comes with a fully implemented user authentication system, enabling you to manage user registrations, logins, password resets, and more, with ease.
* Convenient Routes: Save development time with pre-defined routes, including a login page and a terms page, allowing you to focus on building your app's core functionality.

### How to Start

1. Clone the repository to your local machine.
2. Install dependencies using Meteor:
```bash
meteor npm install
```
3. Start the project:
```bash
npm start
```

### Using an External MongoDB

If you prefer to use an external MongoDB for your project, follow these steps:

1. Open the package.json file.
2. Locate the script:
```json
"scripts": {
  "start-with-local-mongodb": "MONGO_URL=mongodb://localhost:27017/DATABASE_NAME",
  ...
}
```
3. Replace `DATABASE_NAME` with the name of your MongoDB database.
4. Ensure you have MongoDB installed correctly on your system and accessible to the project.



### Contributing
We welcome contributions to enhance and improve this template. If you encounter any issues or have ideas for new features, feel free to open an issue or submit a pull request.


Kickstart your Meteor projects with confidence using this template. With Tailwind CSS, a comprehensive Accounts system, and pre-configured Routes, you can focus on building your application's unique features while enjoying the convenience and power of Meteor. Happy coding!
