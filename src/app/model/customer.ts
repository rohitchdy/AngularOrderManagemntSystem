import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Customer {
    customerID: String ='';
    companyName: String='';
    contactName: String ='';
    contactTitle:String ='';
    address:String ='';
    city:String='';
    region:String='';
    postalCode: String='';
    country: String='';
    fax:String ='';
    phone:String='';

    formCustomerGroup: FormGroup=null;

    constructor(){
     var _builder =new FormBuilder();
     this.formCustomerGroup=_builder.group({});
     this.formCustomerGroup.addControl("CompanyNameControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("ContactNameControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("ContactTitle", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("AddressControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("CityControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("RegionControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("PostalCodeControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("CountryControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("PhoneControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("FaxControl", new FormControl('', Validators.required));

     this.formCustomerGroup.addControl("CategoryControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("ProductControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("EmployeeControl", new FormControl('', Validators.required));
     this.formCustomerGroup.addControl("ShipperControl", new FormControl('', Validators.required));

     var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[A-Z]{5}$"));

        this.formCustomerGroup
            .addControl("CustomerIDControl",
                new FormControl('', Validators.compose(validationCollection)));
    }



}
