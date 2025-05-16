"use strict";(self["webpackChunkvue5"]=self["webpackChunkvue5"]||[]).push([[366],{3742:(e,a,s)=>{s.d(a,{A:()=>d});var r=s(4537),t=s(2391),l=s(88);const o=new r.P({uri:"https://sp412b-763ef468411d.herokuapp.com/graphql"}),c=new t.R({link:o,cache:new l.D}),d=c},2366:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var r=s(641),t=s(33);const l={key:1,class:"success-message"},o={key:2,class:"error-message"};function c(e,a,s,c,d,i){const n=(0,r.g2)("v-btn"),u=(0,r.g2)("v-progress-linear");return(0,r.uX)(),(0,r.CE)("div",null,[a[1]||(a[1]=(0,r.Lk)("h3",null,'Set Stage to "Qualify" for All Records',-1)),(0,r.bF)(n,{onClick:i.updateAllStages,loading:d.loading,color:"primary"},{default:(0,r.k6)((()=>a[0]||(a[0]=[(0,r.eW)(' Set Stage to "Qualify" ')]))),_:1},8,["onClick","loading"]),d.loading?((0,r.uX)(),(0,r.Wv)(u,{key:0,value:d.progress,height:"10",color:"blue",class:"my-4"},null,8,["value"])):(0,r.Q3)("",!0),d.successMessage?((0,r.uX)(),(0,r.CE)("div",l,(0,t.v_)(d.successMessage),1)):(0,r.Q3)("",!0),d.errorMessage?((0,r.uX)(),(0,r.CE)("div",o,(0,t.v_)(d.errorMessage),1)):(0,r.Q3)("",!0)])}var d=s(6679),i=s(3742);const n={name:"SetStageToQualify",data(){return{loading:!1,successMessage:"",errorMessage:"",progress:0}},methods:{async fetchAllRecordIds(){const e=d.J1`
          query getAllRecords {
            leads(pagination: { limit: 10000 }) {
              data {
                id
              }
            }
          }
        `;try{const{data:a}=await i.A.query({query:e});return a.leads.data.map((e=>e.id))}catch(a){throw console.error("Error fetching all records:",a),new Error("Failed to fetch all records")}},async setStageToQualifyForAll(e){const a=d.J1`
          mutation updateLead($id: ID!, $data: LeadInput!) {
            updateLead(id: $id, data: $data) {
              data {
                id
                attributes {
                  stage
                }
              }
            }
          }
        `,s={stage:"Qualify"};for(let t=0;t<e.length;t++)try{await i.A.mutate({mutation:a,variables:{id:e[t],data:s}}),this.progress=(t+1)/e.length*100}catch(r){throw console.error(`Error updating lead ID ${e[t]}:`,r),new Error("Failed to update all records")}},async updateAllStages(){this.loading=!0,this.successMessage="",this.errorMessage="",this.progress=0;try{const e=await this.fetchAllRecordIds();await this.setStageToQualifyForAll(e),this.successMessage='Stage set to "Qualify" for all records successfully.'}catch(e){this.errorMessage="An error occurred while updating records. Please try again."}finally{this.loading=!1}}}};var u=s(6262);const g=(0,u.A)(n,[["render",c],["__scopeId","data-v-17aedd28"]]),h=g}}]);
//# sourceMappingURL=366.45e00f8c.js.map