"use strict";(self["webpackChunkvue5"]=self["webpackChunkvue5"]||[]).push([[484],{6484:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(641),o=a(33);function n(e,t,a,n,s,i){const l=(0,r.g2)("v-btn"),d=(0,r.g2)("v-file-input"),c=(0,r.g2)("v-alert"),u=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.Wv)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(l,{onClick:i.importData},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Import Data")]))),_:1},8,["onClick"]),(0,r.bF)(d,{modelValue:s.file,"onUpdate:modelValue":t[0]||(t[0]=e=>s.file=e),label:"Choose file",accept:".csv,.json"},null,8,["modelValue"]),s.importStatus?((0,r.uX)(),(0,r.Wv)(c,{key:0,type:s.importStatus.type,dismissible:""},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(s.importStatus.message),1)])),_:1},8,["type"])):(0,r.Q3)("",!0)])),_:1})}var s=a(6679),i=a(3742),l=a(5669);const d={data(){return{file:null,fileContent:null,importStatus:null}},watch:{file(e){e&&this.readFile(e)}},methods:{removeTypename(e){if(null===e||"object"!==typeof e)return e;if(Array.isArray(e))return e.map((e=>this.removeTypename(e)));const t={};for(const[a,r]of Object.entries(e))"__typename"!==a&&(t[a]=this.removeTypename(r));return t},convertToISOString(e){const t=e.split("-");if(3===t.length){const[e,a,r]=t,o=new Date(r,a-1,e);return o.toISOString()}return console.warn("Invalid date format:",e),null},readFile(e){const t=new FileReader;t.onerror=e=>{console.error("Error reading file:",e),this.importStatus={type:"error",message:"Failed to read file."}},t.onload=e=>{this.fileContent=e.target.result},t.readAsText(e)},parseFile(e,t){return"application/json"===t?JSON.parse(e):"text/csv"===t?this.parseCSV(e):[]},parseCSV(e){const t=e.trim().split("\n"),a=t[0].split(",");return t.slice(1).map((e=>{const t=e.split(",");return a.reduce(((e,a,r)=>(e[a.trim()]=t[r]?.trim(),e)),{})}))},async importData(){if(this.file&&this.fileContent)try{const e=this.parseFile(this.fileContent,this.file.type);await this.importRecords(e)}catch(e){this.importStatus={type:"error",message:"An error occurred during parsing."},console.error("Error in parsing:",e)}else this.importStatus={type:"error",message:"Please select a file first."}},async importRecords(e){try{for(let t=0;t<e.length;t++){const a=e[t];await this.createOrUpdateContactByKeys(a)}this.importStatus={type:"success",message:`${e.length} records imported successfully!`}}catch(t){this.importStatus={type:"error",message:"An error occurred during import."},console.error("Error importing records:",t)}},async createOrUpdateContactByKeys(e){const t=this.removeTypename(e);t.advUrlDate?t.advUrlDate=(0,l.Cb)(t.advUrlDate):delete t.advUrlDate,t.dialedDate?t.dialedDate=(0,l.hj)(t.dialedDate):delete t.dialedDate,t.sourceDate?t.sourceDate=(0,l.Cb)(t.sourceDate):delete t.sourceDate,t.lastCall?t.lastCall=this.convertToISOString(t.lastCall):delete t.lastCall,t.nextCall?t.nextCall=this.convertToISOString(t.nextCall):delete t.nextCall,t.action?t.action=t.action.map((e=>{const{...t}=e;return t})):delete t.action,delete t.requestColor,delete t.id,delete t.stageEmoji,delete t.edit,delete t.editField,delete t.updatedAt,delete t.id;const a=s.J1`
    query findContact($phoneNumber: String!, $project: String!) {
      leads(filters: { phoneNumber: { eq: $phoneNumber }, project: { eq: $project } }) {
        data {
          id
        }
      }
    }
  `;try{const{data:e}=await i.A.query({query:a,variables:{phoneNumber:(0,l.lh)(t.phoneNumber),project:t.project},fetchPolicy:"no-cache"}),r=e.leads.data.length>0?e.leads.data[0].id:null,o=r?s.J1`
      mutation updateLead($id: ID!, $data: LeadInput!) {
        updateLead(id: $id, data: $data) {
          data {
            id
            attributes {
              name
              email
              phoneNumber
              viewDoc
              source
              status
              rating
              AppointmentDate
              NextFollowUpDate
              occupation
              project
              calledId
              visitCount
              interaction
              lastCall
              nextCall
              no
              user
              language
              called
              contacted
              message
              doc
              dialedDate
              phoneId
              sourceDate
              address
              advUrl
              advUrlDate
              facebookUrl
              notionUrl
              process
              delegate
              task
              parentId
              coBroked
              requestType
              name2
              stage
              assignee
              remark
              action {
                date
                task
                status
              }
              info
              location
              district
              document {
                description
                url
              }
              advertisement {
                description
                url
              }
            }
          }
        }
      }
    `:s.J1`
      mutation createLead($data: LeadInput!) {
        createLead(data: $data) {
          data {
            id
            attributes {
              name
              email
              phoneNumber
              viewDoc
              source
              status
              rating
              AppointmentDate
              NextFollowUpDate
              occupation
              project
              calledId
              visitCount
              interaction
              lastCall
              nextCall
              no
              user
              language
              called
              contacted
              message
              doc
              dialedDate
              phoneId
              sourceDate
              address
              advUrl
              advUrlDate
              facebookUrl
              notionUrl
              process
              delegate
              task
              parentId
              coBroked
              requestType
              name2
              stage
              assignee
              remark
              action {
                date
                task
                status
              }
              info
              location
              district
              document {
                description
                url
              }
              advertisement {
                advertiser
                url
              }
            }
          }
        }
      }
    `;"alvin"==t.name&&alert("me"),"1024"==t.id&&alert("ff");const n=await i.A.mutate({mutation:o,variables:r?{id:r,data:t}:{data:t}});return r?n.data.updateLead.data:n.data.createLead.data}catch(r){throw console.error("Error in createOrUpdateContactByKeys:",r),r}}}};var c=a(6262);const u=(0,c.A)(d,[["render",n]]),p=u}}]);
//# sourceMappingURL=484.518984c5.js.map