"use strict";(self["webpackChunkvue5"]=self["webpackChunkvue5"]||[]).push([[396],{3742:(t,e,a)=>{a.d(e,{A:()=>c});var l=a(4537),o=a(2391),n=a(88);const r=new l.P({uri:"https://sp412b-763ef468411d.herokuapp.com/graphql"}),u=new o.R({link:r,cache:new n.D}),c=u},1396:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var l=a(641),o=a(33);function n(t,e,a,n,r,u){const c=(0,l.g2)("v-text-field"),i=(0,l.g2)("v-col"),d=(0,l.g2)("v-btn"),s=(0,l.g2)("v-row"),m=(0,l.g2)("v-alert"),b=(0,l.g2)("v-icon"),v=(0,l.g2)("v-data-table"),p=(0,l.g2)("v-textarea"),g=(0,l.g2)("v-form"),k=(0,l.g2)("v-container");return(0,l.uX)(),(0,l.Wv)(k,null,{default:(0,l.k6)((()=>[e[10]||(e[10]=(0,l.Lk)("h2",null,"Contact Management",-1)),(0,l.bF)(s,null,{default:(0,l.k6)((()=>[(0,l.bF)(i,{cols:"12",md:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{modelValue:n.projectFilter,"onUpdate:modelValue":e[0]||(e[0]=t=>n.projectFilter=t),label:"Enter project name",outlined:""},null,8,["modelValue"])])),_:1}),(0,l.bF)(i,{cols:"12",md:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{onClick:n.loadContactsFromStrapi,color:"primary"},{default:(0,l.k6)((()=>e[5]||(e[5]=[(0,l.eW)("Load Data")]))),_:1},8,["onClick"])])),_:1})])),_:1}),n.loading?((0,l.uX)(),(0,l.Wv)(m,{key:0,type:"info",dismissible:""},{default:(0,l.k6)((()=>e[6]||(e[6]=[(0,l.eW)(" Loading... ")]))),_:1})):(0,l.Q3)("",!0),n.error?((0,l.uX)(),(0,l.Wv)(m,{key:1,type:"error",dismissible:""},{default:(0,l.k6)((()=>[(0,l.eW)(" An error occurred: "+(0,o.v_)(n.error.message),1)])),_:1})):(0,l.Q3)("",!0),n.loading||n.error||!n.contacts.length||n.currentContact?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(v,{key:2,headers:n.headers,items:n.contacts,"item-key":"id",class:"elevation-1",style:{width:"100%"}},{item:(0,l.k6)((({item:t,index:a})=>[(0,l.Lk)("tr",{class:(0,o.C4)(n.getRowClass(a))},[(0,l.Lk)("td",null,(0,o.v_)(t.project),1),(0,l.Lk)("td",null,(0,o.v_)(t.name),1),(0,l.Lk)("td",null,(0,o.v_)(t.phoneNumber),1),(0,l.Lk)("td",null,[(0,l.bF)(d,{onClick:e=>n.editContact(t),color:"primary",icon:""},{default:(0,l.k6)((()=>[(0,l.bF)(b,null,{default:(0,l.k6)((()=>e[7]||(e[7]=[(0,l.eW)("mdi-pencil")]))),_:1})])),_:2},1032,["onClick"])])],2)])),_:1},8,["headers","items"])),n.currentContact?((0,l.uX)(),(0,l.Wv)(g,{key:3,ref:"contactForm"},{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>[(0,l.bF)(i,{cols:"12",md:"12"},{default:(0,l.k6)((()=>[(0,l.Lk)("h2",null,"Edit Contact: "+(0,o.v_)(n.currentContact.name),1),(0,l.bF)(p,{modelValue:n.editContactData.interaction,"onUpdate:modelValue":e[1]||(e[1]=t=>n.editContactData.interaction=t),label:"Interaction",outlined:""},null,8,["modelValue"]),(0,l.bF)(c,{label:"Doc",modelValue:n.editContactData.doc,"onUpdate:modelValue":e[2]||(e[2]=t=>n.editContactData.doc=t),class:"edit-mode"},null,8,["modelValue"]),(0,l.bF)(c,{label:"Status",modelValue:n.editContactData.status,"onUpdate:modelValue":e[3]||(e[3]=t=>n.editContactData.status=t),class:"edit-mode"},null,8,["modelValue"]),(0,l.bF)(c,{label:"Rating",modelValue:n.editContactData.rating,"onUpdate:modelValue":e[4]||(e[4]=t=>n.editContactData.rating=t),class:"edit-mode"},null,8,["modelValue"]),(0,l.bF)(d,{onClick:n.saveContact,color:"primary"},{default:(0,l.k6)((()=>e[8]||(e[8]=[(0,l.eW)("Save")]))),_:1},8,["onClick"]),(0,l.bF)(d,{onClick:n.cancelEdit,color:"blue"},{default:(0,l.k6)((()=>e[9]||(e[9]=[(0,l.eW)("Cancel")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512)):(0,l.Q3)("",!0)])),_:1})}a(4114);var r=a(6679),u=a(953),c=a(3742);const i={name:"listByProject",setup(){const t=(0,u.KR)(""),e=(0,u.KR)([]),a=(0,u.KR)(null),l=(0,u.KR)(!1),o=(0,u.KR)(null),n=(0,u.KR)({}),i=[{text:"Project",title:"Project",value:"project",width:"15%"},{text:"Name",title:"Name",value:"name",width:"15%"},{text:"Phone",title:"Phone",value:"phoneNumber",width:"25%"},{text:"Edit",title:"Edit",value:"edit",sortable:!1,width:"10%"}];async function d(){l.value=!0,e.value=[];const o=r.J1`
        query($project: String!) {
          leads(filters: { project: { eq: $project } }, pagination: { limit: 1000 }) {
            data {
              id
              attributes {
                no
                project
                user
                name
                phoneNumber
                status
                phoneId
                interaction
                lastCall
                nextCall
                called
                rating
                dialedDate
                sourceDate
                contacted
                language
                message
                doc
                stage
                source
                occupation
                updatedAt
              }
            }
          }
        }
      `;try{const{data:a}=await c.A.query({query:o,variables:{project:t.value},fetchPolicy:"no-cache"});a.leads.data.forEach((t=>{const a={id:t.id,no:t.attributes.no,user:t.attributes.user||"",name:t.attributes.name||"",phoneNumber:t.attributes.phoneNumber||"",project:t.attributes.project||"",occupation:t.attributes.occupation||"",status:t.attributes.status||"",phoneId:t.attributes.phoneId||"",interaction:t.attributes.interaction||"",lastCall:t.attributes.lastCall||"1-1-1900",nextCall:t.attributes.nextCall||"1-1-1900",called:t.attributes.called||0,rating:t.attributes.rating||0,dialedDate:t.attributes.dialedDate||"1-1-1900",sourceDate:t.attributes.sourceDate||"1-1-1900",contacted:t.attributes.contacted||0,language:t.attributes.language||"",message:t.attributes.message||"",doc:t.attributes.doc||"",stage:t.attributes.stage||"",source:t.attributes.source||"",updatedAt:(new Date).toISOString()};e.value.push(a)}))}catch(n){a.value=n,console.error("Error loading contacts from Strapi:",n)}finally{l.value=!1,t.value=""}}function s(t){o.value=t,n.value={...t}}function m(){o.value=null}async function b(){const t=e.value.findIndex((t=>t.id===o.value.id));-1!==t&&(e.value[t]={...e.value[t],...n.value}),o.value=null}const v=t=>t%2===0?"even-row":"odd-row";return{projectFilter:t,contacts:e,loadContactsFromStrapi:d,error:a,loading:l,headers:i,currentContact:o,editContactData:n,editContact:s,cancelEdit:m,saveContact:b,getRowClass:v}}};var d=a(6262);const s=(0,d.A)(i,[["render",n],["__scopeId","data-v-15918b9d"]]),m=s}}]);
//# sourceMappingURL=396.88e78017.js.map