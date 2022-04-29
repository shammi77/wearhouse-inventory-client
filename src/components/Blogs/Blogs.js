import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Question and answer</h2>
            <br/>
            <h4>Q1. Difference between javascript and nodejs</h4>
            <p>javascript--- The JavaScript programming language is used to write scripts for websites. Client-side implementations use it. Javascript is used in frontend development. It's an upgraded version of the ECMA script that uses Chrome's V8 engine written in C++. <br/>
            nodejs---  NodeJS is a runtime environment for Javascript. The majority of its usage is server-side. Javascript, C++, and C are all used in Nodejs.</p>
            <h4>Q3. Difference between sql and nosql databases.</h4>
            <br/>
            <p>sql--- RDBMS (Relational Database Management System). Scalable on a vertical plane.Complex queries are best handled by these databases. Hierarchical data storage is not suitable for these databases.<br/>
            nosql--- A non-relational or distributed database.  Easily scalable on a horizontal plane. Databases like these are best suited for storing hierarchical data. These databases are not so good for complex queries. </p>
            <h4>Q4. What is the purpose of jwt and how does it work?</h4>
            <br/>
            <p>JWT, or JSON Web Token, is an open standard used to transmit security data between two parties — a client and a server. To secure API. To work with many server together.<br/>
            JWT is made with a secret key and that secret key is private to you, which means you will never disclose that to the public or inject it inside the JWT token. When you receive a JWT from the client, you can confirm that JWT with this secret key held on the server.

        </p>
        </div>
    );
};

export default Blogs;