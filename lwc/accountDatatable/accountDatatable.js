import { LightningElement, wire } from 'lwc';
import {refreshApex} from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import {loadStyle} from 'lightning/platformResourceLoader'
import EditIcon from '@salesforce/resourceUrl/EditIcon'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import getAccount from '@salesforce/apex/accountController.getAccount';

import Name_field from '@salesforce/schema/Account.Name';
import Rating_field from '@salesforce/schema/Account.Rating';
import Id_field from '@salesforce/schema/Account.Id';

const actions = [
    {label: 'Delite', name: 'delite'}
];

const columns = [
    { label: 'Account Name', fieldName: 'Name', editable: true},
    { label: 'Account Rating', fieldName: 'Rating', editable: true,},
    { type: 'button', typeAttributes:{ label: 'Delite', variant: 'brand', rowActions: actions}, cellAttributes:{alignment: 'center'},},
];

export default class AccountDatatable extends LightningElement {
    columns=columns;
    draftValues = [];
    delId;
    overLay = false;

    @wire (getAccount)
    account;

    handleRowAction(event){
        const rowId = event.detail.row.Id;
        this.delId = rowId;
            deleteRecord(this.delId)
                .then(() => {
                    this.dispatchEvent(new ShowToastEvent({
                        title:'Contact Deleted',
                        message:'Contact deleted successfully',
                        variant:'success',
                    }))
                    this.overLay=false;
                    return refreshApex(this.account);
                })
    }

    handleSave(event){
        const fields = {};
        fields[Id_field.fieldApiName] = event.detail.draftValues[0].Id;
        fields[Name_field.fieldApiName] = event.detail.draftValues[0].Name;
        fields[Rating_field.fieldApiName] = event.detail.draftValues[0].Rating;

        const recordInput = {fields};

        updateRecord(recordInput)
            .then(()=>{
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Accound updated',
                    variant: 'success'
                    })
                );
                return refreshApex(this.account).then(()=>{
                    this.draftValues=[];
                    this.overLay=false;
                });
            }).catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error updating',
                    message: error.body.message,
                    variant: 'error',
                }))
            })
    }

    handleCancel(){
        this.draftValues = [];
        this.overLay=false;
    }

    cellChange(event){
        this.overLay=true;
    }

    renderedCallback(){ 
        if(this.isCssLoaded) return
        this.isCssLoaded = true
        loadStyle(this, EditIcon).then(()=>{
            console.log("Loaded CSS Successfully")
        }).catch(error=>{ 
            console.error("Error in loading the CSS")
        })
    }
}