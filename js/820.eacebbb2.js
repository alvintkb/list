"use strict";(self["webpackChunkvue5"]=self["webpackChunkvue5"]||[]).push([[820],{6265:(e,a,t)=>{t.d(a,{A:()=>g});var i=t(641);const l={class:"camera-capture"},n={key:0},o={ref:"video",autoplay:"",playsinline:""},r={ref:"canvas",style:{display:"none"}},s=["src"],c={key:1};function d(e,a,t,d,u,p){return(0,i.uX)(),(0,i.CE)("div",l,[u.hasMediaDevices?((0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("video",o,null,512),(0,i.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>p.takePicture&&p.takePicture(...e))},"Take Picture"),(0,i.Lk)("canvas",r,null,512),u.imageData?((0,i.uX)(),(0,i.CE)("img",{key:0,src:u.imageData,alt:"Captured Image"},null,8,s)):(0,i.Q3)("",!0)])):((0,i.uX)(),(0,i.CE)("div",c,a[1]||(a[1]=[(0,i.Lk)("p",null,"Your device does not support camera access.",-1)])))])}const u={name:"CameraCapture",data(){return{hasMediaDevices:!1,imageData:null}},mounted(){this.initializeCamera()},methods:{async initializeCamera(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){this.hasMediaDevices=!0;try{const e=await navigator.mediaDevices.getUserMedia({video:!0});this.$refs.video.srcObject=e}catch(e){console.error("Error accessing camera:",e),this.hasMediaDevices=!1}}else this.hasMediaDevices=!1},takePicture(){const e=this.$refs.canvas,a=this.$refs.video;e.width=a.videoWidth,e.height=a.videoHeight;const t=e.getContext("2d");t.drawImage(a,0,0,e.width,e.height),this.imageData=e.toDataURL("image/png")}}};var p=t(6262);const m=(0,p.A)(u,[["render",d],["__scopeId","data-v-c2878f9c"]]),g=m},17:(e,a,t)=>{t.d(a,{A:()=>g});var i=t(641),l=t(33);const n={key:0},o={key:1},r=["href"],s={key:2};function c(e,a,t,c,d,u){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("input",{type:"file",onChange:a[0]||(a[0]=(...e)=>u.onFileChange&&u.onFileChange(...e))},null,32),(0,i.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>u.uploadImage&&u.uploadImage(...e))},"Upload"),d.uploading?((0,i.uX)(),(0,i.CE)("p",n,"Uploading...")):(0,i.Q3)("",!0),d.imageUrl?((0,i.uX)(),(0,i.CE)("p",o,[a[2]||(a[2]=(0,i.eW)("Image URL: ")),(0,i.Lk)("a",{href:d.imageUrl,target:"_blank"},(0,l.v_)(d.imageUrl),9,r)])):(0,i.Q3)("",!0),d.error?((0,i.uX)(),(0,i.CE)("p",s,(0,l.v_)(d.error),1)):(0,i.Q3)("",!0)])}var d=t(4335);const u={name:"ImageUploader",data(){return{file:null,imageUrl:"",uploading:!1,error:""}},methods:{onFileChange(e){this.file=e.target.files[0]},async uploadImage(){if(!this.file)return void(this.error="Please select an image file first.");this.uploading=!0,this.error="";const e=new FormData;e.append("file",this.file),e.append("upload_preset","telco_unifi");try{const a=await d.A.post("https://api.cloudinary.com/v1_1/alvin-tan/image/upload",e,{headers:{"X-Requested-With":"XMLHttpRequest"}});this.imageUrl=a.data.secure_url}catch(a){a.response&&400===a.response.status?this.error="Bad Request: "+(a.response.data.error.message||"Invalid request parameters"):this.error="Error uploading image: "+a.message,console.error("Error uploading image:",a.response?a.response.data:a.message)}finally{this.uploading=!1}}}};var p=t(6262);const m=(0,p.A)(u,[["render",c],["__scopeId","data-v-4280697f"]]),g=m},9546:(e,a,t)=>{t.d(a,{A:()=>c});var i=t(641);function l(e,a,t,l,n,o){return(0,i.uX)(),(0,i.CE)("button",{onClick:a[0]||(a[0]=(...e)=>l.goToAdContacts&&l.goToAdContacts(...e))},"View Ad Contacts")}t(4114);var n=t(5220);const o={name:"LaunchButton",setup(){const e=(0,n.rd)(),a=()=>{e.push("/ad-contacts")};return{goToAdContacts:a}}};var r=t(6262);const s=(0,r.A)(o,[["render",l],["__scopeId","data-v-3c496bee"]]),c=s},7172:(e,a,t)=>{t.d(a,{A:()=>R});var i=t(641),l=t(33);const n={class:"pricing-container"},o=["id"],r={class:"pricing-table"},s={class:"pricing-card"},c={class:"pricing-details"},d={key:0},u={class:"image-and-text"},p=["src","alt"],m={key:1},g={class:"svg-and-text"},v=["innerHTML"],k={key:2},h={key:3},f={class:"pricing-info"},L={class:"pricing-content"},y={class:"pricing-action"},C=["onClick"];function I(e,a,t,I,U,b){return(0,i.uX)(),(0,i.CE)("div",n,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.plans,((e,a)=>((0,i.uX)(),(0,i.CE)("section",{key:a,id:"pricing-section-"+(a+1),class:"pricing-section"},[(0,i.Lk)("div",r,[(0,i.Lk)("div",s,[(0,i.Lk)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.features,((a,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t},[b.isImage(a)?((0,i.uX)(),(0,i.CE)("div",d,[(0,i.Lk)("div",u,[(0,i.Lk)("img",{src:b.getImagePath(a).src,alt:e.title+" feature image",style:(0,l.Tr)(b.getImageStyle(a)),class:"feature-image"},null,12,p),(0,i.Lk)("h2",null,(0,l.v_)(b.getImagePath(a).text),1)])])):b.isSvg(a)?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("div",g,[(0,i.Lk)("div",{innerHTML:b.getSvgContent(a).svg},null,8,v),(0,i.Lk)("span",null,(0,l.v_)(b.getSvgContent(a).text),1)])])):b.isHtmlTag(a)?((0,i.uX)(),(0,i.CE)("div",k,[((0,i.uX)(),(0,i.Wv)((0,i.$y)(b.getHtmlTagName(a)),null,{default:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(b.getHtmlTagContent(a)),1)])),_:2},1024))])):((0,i.uX)(),(0,i.CE)("div",h,(0,l.v_)(a),1))])))),128)),(0,i.Lk)("div",f,[(0,i.Lk)("p",null,(0,l.v_)(e.promo),1),(0,i.Lk)("p",null,(0,l.v_)(e.price),1)]),(0,i.Lk)("div",L,[(0,i.Lk)("p",null,(0,l.v_)(e.extra),1)]),(0,i.Lk)("div",y,[(0,i.Lk)("button",{class:"apply-now-btn",onClick:a=>b.fillPackageName(e.title)},"Apply Now",8,C)])])])])],8,o)))),128))])}const U={name:"MyPackage",props:{pageTitle:{type:String,default:""},plans:{type:Array,required:!0}},methods:{fillPackageName(e){console.log(e),this.packageName=e,document.getElementById("registration-form").scrollIntoView({behavior:"smooth"})},isImage(e){return e.startsWith("image:")},getImagePath(e){const a=e.split(","),t=a[0].split("image:")[1].trim(),i=a[3]?a[3].trim():"";return{src:t,text:i}},getImageStyle(e){const a=e.split(","),t=a[1]?a[1].split("=")[1].trim()+"px":"auto",i=a[2]?a[2].split("=")[1].trim()+"px":"auto";return{width:t,height:i}},isSvg(e){return e.startsWith("svg:")},getSvgContent(e){const[a,...t]=e.split("svg:")[1].split(","),i=a.trim(),l=t.shift().trim();return{svg:`<svg ${i}>${l}</svg>`,text:t.join(",").trim()}},isHtmlTag(e){return e.match(/^[a-zA-Z0-9]+:/)},getHtmlTagName(e){return e.split(":")[0]},getHtmlTagContent(e){return e.split(":")[1].trim()}}};var b=t(6262);const $=(0,b.A)(U,[["render",I]]),R=$},1380:(e,a,t)=>{t.d(a,{A:()=>v});var i=t(641),l=t(3751),n=t(33);const o={class:"container"},r={class:"selector-wrapper"},s=["src","alt","onClick"],c=["value"],d={class:"selector-title"};function u(e,a,t,u,p,m){return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("div",r,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.plans,((t,o)=>((0,i.uX)(),(0,i.CE)("label",{key:o,class:"sd-label selector-label"},[(0,i.Lk)("img",{class:"svg-icon",src:t.image,alt:t.title,onClick:e=>m.scrollToSection("pricing-section-"+(o+1))},null,8,s),(0,i.bo)((0,i.Lk)("input",{type:"radio",class:"sd-radio",name:"plan",value:t.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectedPlan=a)},null,8,c),[[l.XL,e.selectedPlan]]),a[1]||(a[1]=(0,i.Lk)("span",{class:"sd-tick"},null,-1)),(0,i.Lk)("div",d,(0,n.v_)(t.price),1)])))),128)),a[2]||(a[2]=(0,i.Lk)("div",{class:"device-pair txt-small d-none"}," Pair with your Unifi subscription ",-1))])])}const p={name:"MySelector",props:{pageTitle:{type:String,default:""},plans:{type:Array,required:!0}},methods:{scrollToSection(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}};var m=t(6262);const g=(0,m.A)(p,[["render",u]]),v=g},1591:(e,a,t)=>{t.d(a,{A:()=>q});var i=t(641),l=t(3751),n=t(33);const o={class:"form-container"},r={class:"form-group"},s={key:0,for:"project"},c={class:"form-group"},d={key:0,for:"name"},u={class:"form-group"},p={key:0,for:"phone"},m={class:"form-group"},g={key:0,for:"email"},v={class:"form-group"},k={key:0,for:"address"},h={class:"form-group"},f={key:0,for:"message"},L={class:"form-group"},y={class:"form-row"},C={class:"form-group"},I={class:"form-group"},U={class:"form-group"},b={class:"form-group"},$={class:"form-group"},R=["disabled"];function S(e,a,t,S,B,w){const D=(0,i.g2)("popUp2"),F=(0,i.g2)("TermsConditions");return(0,i.uX)(),(0,i.CE)(i.FK,null,[a[25]||(a[25]=(0,i.Lk)("h1",{id:"registration-form"},"Registration Form",-1)),(0,i.Lk)("div",o,[a[23]||(a[23]=(0,i.Lk)("h3",null,"Fill up your details and we would be delighted to assist you",-1)),(0,i.Lk)("form",{onSubmit:a[15]||(a[15]=(0,l.D$)(((...e)=>S.submitForm&&S.submitForm(...e)),["prevent"]))},[(0,i.Lk)("div",r,[S.localPackage?((0,i.uX)(),(0,i.CE)("label",s,"Package Name:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"text",id:"package","onUpdate:modelValue":a[0]||(a[0]=e=>S.localPackage=e),name:"package-name",placeholder:"Package*",required:""},null,512),[[l.Jo,S.localPackage]])]),(0,i.Lk)("div",c,[S.name?((0,i.uX)(),(0,i.CE)("label",d,"Name:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"text",id:"name","onUpdate:modelValue":a[1]||(a[1]=e=>S.name=e),placeholder:"Name*",required:""},null,512),[[l.Jo,S.name]])]),(0,i.Lk)("div",u,[S.phone?((0,i.uX)(),(0,i.CE)("label",p,"Phone:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"tel",id:"phone","onUpdate:modelValue":a[2]||(a[2]=a=>e.formattedPhone=a),onInput:a[3]||(a[3]=(...e)=>S.formatPhone&&S.formatPhone(...e)),placeholder:"Phone*",required:""},null,544),[[l.Jo,e.formattedPhone]])]),(0,i.Lk)("div",m,[S.email?((0,i.uX)(),(0,i.CE)("label",g,"Email:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"email",id:"email","onUpdate:modelValue":a[4]||(a[4]=e=>S.email=e),placeholder:"Email*",required:""},null,512),[[l.Jo,S.email]])]),(0,i.Lk)("div",v,[S.address?((0,i.uX)(),(0,i.CE)("label",k,"Installation Address:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"text",id:"address","onUpdate:modelValue":a[5]||(a[5]=e=>S.address=e),placeholder:"Installation Address*",required:""},null,512),[[l.Jo,S.address]])]),(0,i.Lk)("div",h,[S.message?((0,i.uX)(),(0,i.CE)("label",f,"Additional Info:")):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("textarea",{class:"white-text",id:"message","onUpdate:modelValue":a[6]||(a[6]=e=>S.message=e),placeholder:"Additional Info*",required:""},null,512),[[l.Jo,S.message]])]),a[22]||(a[22]=(0,i.Lk)("label",{for:"appointmentDate"},"Installation Schedule:",-1)),(0,i.Lk)("div",L,[(0,i.Lk)("div",y,[(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"date",id:"appointmentDate","onUpdate:modelValue":a[7]||(a[7]=e=>S.appointmentDate=e),placeholder:"Appointment Date*",required:""},null,512),[[l.Jo,S.appointmentDate]]),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"time",id:"appointmentTime","onUpdate:modelValue":a[8]||(a[8]=e=>S.appointmentTime=e),placeholder:"Appointment Time*",required:""},null,512),[[l.Jo,S.appointmentTime]])])]),(0,i.Lk)("div",C,[a[17]||(a[17]=(0,i.Lk)("label",{for:"preferredInstallationDate"},"Preferred Installation Date (dd/mm/yyyy):",-1)),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"text",id:"preferredInstallationDate","onUpdate:modelValue":a[9]||(a[9]=e=>S.preferredInstallationDate=e),placeholder:"Preferred Installation Date*",required:""},null,512),[[l.Jo,S.preferredInstallationDate]])]),(0,i.Lk)("div",I,[a[18]||(a[18]=(0,i.Lk)("label",{for:"nationality"},"Nationality:",-1)),(0,i.bo)((0,i.Lk)("input",{class:"white-text",type:"text",id:"nationality","onUpdate:modelValue":a[10]||(a[10]=e=>S.nationality=e),placeholder:"Nationality*",required:""},null,512),[[l.Jo,S.nationality]])]),(0,i.Lk)("div",U,[a[19]||(a[19]=(0,i.Lk)("label",{for:"icFront"},"IC Front:",-1)),(0,i.Lk)("input",{type:"file",id:"icFront",onChange:a[11]||(a[11]=e=>S.handleFileUpload(e,"icFront")),required:""},null,32),(0,i.Lk)("p",null,(0,n.v_)(S.icFrontName||"No file chosen"),1)]),(0,i.Lk)("div",b,[a[20]||(a[20]=(0,i.Lk)("label",{for:"icBack"},"IC Back:",-1)),(0,i.Lk)("input",{type:"file",id:"icBack",onChange:a[12]||(a[12]=e=>S.handleFileUpload(e,"icBack")),required:""},null,32),(0,i.Lk)("p",null,(0,n.v_)(S.icBackName||"No file chosen"),1)]),(0,i.Lk)("div",$,[a[21]||(a[21]=(0,i.Lk)("label",{for:"utilityBills"},"Utility Bills (Electric or Water):",-1)),(0,i.Lk)("input",{type:"file",id:"utilityBills",onChange:a[13]||(a[13]=e=>S.handleFileUpload(e,"utilityBills")),required:""},null,32),(0,i.Lk)("p",null,(0,n.v_)(S.utilityBillsName||"No file chosen"),1)]),(0,i.bF)(D,{"is-visible":S.showModal,"modal-message":S.modalMessage,onClose:a[14]||(a[14]=e=>S.showModal=!1)},null,8,["is-visible","modal-message"]),(0,i.Lk)("button",{type:"submit",class:"submit-button white-text",disabled:S.formSubmitted},(0,n.v_)(S.formSubmitted?"Submitting...":"Yes! Contact Me Now"),9,R)],32),a[24]||(a[24]=(0,i.Lk)("br",null,null,-1)),(0,i.bF)(F)]),(0,i.bF)(D,{"is-visible":S.showModal,"modal-message":S.modalMessage,onClose:a[16]||(a[16]=e=>S.showModal=!1)},null,8,["is-visible","modal-message"])],64)}var B=t(953),w=t(1186),D=t(6679);const F={key:0,class:"modal"},P={class:"modal-content"};function E(e,a,t,l,o,r){return t.isVisible?((0,i.uX)(),(0,i.CE)("div",F,[(0,i.Lk)("div",P,[(0,i.Lk)("span",{class:"close",onClick:a[0]||(a[0]=a=>e.$emit("close"))},"×"),(0,i.Lk)("p",null,(0,n.v_)(t.modalMessage),1)])])):(0,i.Q3)("",!0)}const A={name:"popUp2",props:{isVisible:{type:Boolean,required:!0},modalMessage:{type:String,required:!0}},emits:["close"]};var X=t(6262);const _=(0,X.A)(A,[["render",E],["__scopeId","data-v-4f7ce36e"]]),N=_,x={name:"tmReg",components:{popUp2:N},props:{project:{type:String,required:!0}},emits:["close"],setup(e,{emit:a}){const t=(0,B.KR)(e.project),l=(0,B.KR)(""),n=(0,B.KR)(!1),o=(0,B.KR)(!1),r=(0,B.KR)(""),s=(0,B.KR)(""),c=(0,B.KR)(""),d=(0,B.KR)(""),u=(0,B.KR)(""),p=(0,B.KR)(""),m=(0,B.KR)(""),g=(0,B.KR)(""),v=(0,B.KR)(""),k=(0,B.KR)(""),h=(0,B.KR)(null),f=(0,B.KR)(null),L=(0,B.KR)(null),y=(0,B.KR)(""),C=(0,B.KR)(""),I=(0,B.KR)(""),U=(0,B.KR)(""),b=e=>{const a=e.target,t=a.value.replace(/\D/g,"").substring(0,10),i=t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");a.value=i,c.value=t};(0,i.wB)((()=>e.project),(e=>{t.value=e}));const $=(e,a)=>{const t=e.target.files[0];"icFront"===a?(h.value=t,y.value=t.name):"icBack"===a?(f.value=t,C.value=t.name):"utilityBills"===a&&(L.value=t,I.value=t.name)},R=()=>{a("close")},S=D.J1`
      query ($phone: String) {
        contacts(filters: { phone: { eq: $phone } }) {
          data {
            id
            attributes {
              name
              phone
            }
          }
        }
      }
    `,F=D.J1`
  mutation AddContact($name: String!, $project: String!, $email: String!,$package:String!,
  $phone: String!, $address: String!, $message: String!, $PreferredInstallationDate: String!, 
  $Nationality: String!, $ICFrontURL: String!, $ICBackURL: String!, $UtilityBillURL: String!) {
  createContact(data: { 
    project: $project, 
    package: $package,
    name: $name, 
    email: $email, 
    phone: $phone, 
    installationAddress: $address, 
    message: $message, 
    PreferredInstallationDate: $PreferredInstallationDate, 
    Nationality: $Nationality, 
    ICFrontURL: $ICFrontURL, 
    ICBackURL: $ICBackURL, 
    UtilityBillURL: $UtilityBillURL 
  }) {
    data {
      id
      attributes {
        project
        package
        name
        phone
        IC
        email
        installationAddress
        billingAddress
        message
        PreferredInstallationDate
        Nationality
        ICFrontURL
        ICBackURL
        UtilityBillURL 
      }
    }
  }
}
 `,P=D.J1`
     mutation UpdateContact($id: ID!, $name: String!, $project: String!, $email: String!, $package: String!, 
  $phone: String!, $address: String!, $message: String!, $PreferredInstallationDate: String!, 
  $Nationality: String!, $ICFrontURL: String!, $ICBackURL: String!, $UtilityBillURL: String!) {
  updateContact(id: $id, data: { 
    project: $project, 
    package: $package,
    name: $name, 
    email: $email, 
    phone: $phone, 
    installationAddress: $address, 
    message: $message, 
    PreferredInstallationDate: $PreferredInstallationDate, 
    Nationality: $Nationality, 
    ICFrontURL: $ICFrontURL, 
    ICBackURL: $ICBackURL, 
    UtilityBillURL: $UtilityBillURL 
  }) {
    data {
      id
      attributes {
        project
        package
        name
        phone
        IC
        email
        installationAddress
        billingAddress
        message
        PreferredInstallationDate
        Nationality
        ICFrontURL
        ICBackURL
        UtilityBillURL 
      }
    }
  }
}

    `,{mutate:E}=(0,w.n_)(F),{mutate:A}=(0,w.n_)(P),{refetch:X,loading:_,error:N}=(0,w.IT)(S,{variables:{phone:c.value},skip:!0}),x=async()=>{n.value=!0;try{const{data:e}=await X({phone:c.value});if(N.value)return void console.error("Error fetching contact:",N.value);if(_.value)return void console.log("Waiting for contact check...");if(!e.contacts.data||0===e.contacts.data.length){console.log("Contact does not exist. Creating new contact.");const e=await E({package:l.value,project:t.value,name:s.value,phone:c.value,email:d.value,address:u.value,message:p.value,PreferredInstallationDate:v.value,Nationality:k.value,ICFrontURL:"icFront.value",ICBackURL:"icBack.value",UtilityBillURL:"utilityBillURL.value"});return console.log("Create Success:",e),n.value=!1,o.value=!0,void(r.value="Record created.")}const a=e.contacts.data[0];console.log("Contact exists. Updating contact with ID:",a.id);const i=await A({id:a.id,project:t.value,package:l.value,name:s.value,phone:c.value,email:d.value,address:u.value,message:p.value,PreferredInstallationDate:v.value,Nationality:k.value,ICFrontURL:"icFront.value",ICBackURL:"icBack.value",UtilityBillURL:"utilityBillURL.value"});console.log("Update Success:",i),n.value=!1,o.value=!0,r.value="Record updated."}catch(e){n.value=!1,console.error("Error:",e)}};return{localPackage:l,localProject:t,name:s,phone:c,email:d,address:u,message:p,appointmentDate:m,appointmentTime:g,preferredInstallationDate:v,nationality:k,icFront:h,icBack:f,utilityBills:L,icFrontName:y,icBackName:C,utilityBillsName:U,formSubmitted:n,submitForm:x,formatPhone:b,showModal:o,modalMessage:r,close:R,handleFileUpload:$}}},K=(0,X.A)(x,[["render",S],["__scopeId","data-v-202c1f5f"]]),q=K}}]);
//# sourceMappingURL=820.eacebbb2.js.map