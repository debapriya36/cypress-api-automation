
/// <reference types = "cypress" />  

describe('get user from gorest api',()=>{
  let token = 'ca180c20ab796b8636aec8e94b227cd434248175b130155f5f32a8db7c54063b';
  it('get users',()=>{
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v2/users',
          headers : {
              'Authorization' : "Bearer "+token
          }
      }).then((res)=>{
          expect(res.status).to.eq(200);
          expect(res.body).to.have.length(10);
      })
  });

  it('get user by id',()=>{
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/85932',
        headers : {
          'Authorization' : "Bearer "+token
      }
    }).then((res)=>{
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('id',85932);
        expect(res.body).to.have.property('name','Balachandra Joshi');
        expect(res.body).to.have.property('gender','male');
        expect(res.body.status).to.eq('active');
    }) 
  })
});


// Status: 200 OK Size: 1.12 KB Time: 375 ms
// [
//     {
//       "id": 85932,
//       "name": "Balachandra Joshi",
//       "email": "joshi_balachandra@stokes.biz",
//       "gender": "male",
//       "status": "active"
//     },
//     {
//       "id": 85931,
//       "name": "Satish Ahluwalia",
//       "email": "satish_ahluwalia@bode.biz",
//       "gender": "female",
//       "status": "inactive"
//     },
//     {
//       "id": 85929,
//       "name": "Rev. Ambar Pillai",
//       "email": "ambar_rev_pillai@hartmann-connelly.com",
//       "gender": "female",
//       "status": "inactive"
//     },
//     {
//       "id": 27498,
//       "name": "Divya Kaul",
//       "email": "divya_kaul@marquardt.co",
//       "gender": "female",
//       "status": "inactive"
//     },
//     {
//       "id": 11208,
//       "name": "Bhushit Mukhopadhyay",
//       "email": "bhushit_mukhopadhyay@wunsch.biz",
//       "gender": "female",
//       "status": "active"
//     },
//     {
//       "id": 10343,
//       "name": "Amb. Garuda Kaur",
//       "email": "kaur_amb_garuda@franecki.org",
//       "gender": "male",
//       "status": "active"
//     },
//     {
//       "id": 8775,
//       "name": "Dr. Ghanshyam Ganaka",
//       "email": "ganaka_dr_ghanshyam@heathcote.com",
//       "gender": "male",
//       "status": "active"
//     },
//     {
//       "id": 8773,
//       "name": "The Hon. Deepali Guneta",
//       "email": "the_deepali_hon_guneta@thompson.com",
//       "gender": "female",
//       "status": "inactive"
//     },
//     {
//       "id": 8772,
//       "name": "Som Chopra",
//       "email": "som_chopra@goldner.biz",
//       "gender": "male",
//       "status": "inactive"
//     },
//     {
//       "id": 4354,
//       "name": "Himani Dubashi",
//       "email": "dubashi_himani@muller.biz",
//       "gender": "female",
//       "status": "active"
//     }
//   ]