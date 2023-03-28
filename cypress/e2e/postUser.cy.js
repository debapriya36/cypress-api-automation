/// <reference types = "cypress"/>

describe('post user to gorest api', () => {
    let token = 'ca180c20ab796b8636aec8e94b227cd434248175b130155f5f32a8db7c54063b';
    it('post user', () => {
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : "Bearer "+token
            },
            body : {
                name: "cyuser5",
                email: "cyuser5@gmail.com",
                gender : "male",
                status : "active"
            },
            failOnStatusCode: false
        
        }).then((res)=>{
            expect(res.status).to.eq(422);
        })
    })
});



// Status: 201 Created Size: 94 Bytes Time: 1.74 s
// {
//   "id": 548881,
//   "name": "cyuser1",
//   "email": "cyuser2@gmail.com",
//   "gender": "female",
//   "status": "active"
// }