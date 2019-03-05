/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================


{
  id: "0",
  body: {
    number: "",
    name: "",
    lastUpdated: ",
    authorisedBy: [],
    contact: {
      email: "",
      phoneNumber: "",
      address: "\n\n\n"
    }
  },
  accs: [
    {
      name: "",
      rows: [
        {
          products: [],
          procedures: [""]
        }
      ]
    },
    {
      name: "",
      rows: [ 
        {
          products: [],
          procedures: []
        }
      ]
    }
  ]
}


*/

module.exports = {
  id: '0',
  docs: [
    {
      id: '0',
      ukResponsiblePerson: {
        name: 'Perfumeza',
        address: {
          address1: 'building',
          address2: 'street',
          townOrCity: 'London',
          county: '',
          postCode: 'SE3 9XA'
        }
      },
      contactPerson: {
        fullName: 'Andrew Vincent',
        email: 'andrewvincent@perfumeza.com',
        phone: '03069 990643'
      },
      product: {
        productName: 'Skinx',
        category: 'Skin',
        subCategory: 'Skin care products',
        subSubCategory: 'Face mask',
        dateAdded: '3 March 2019',
        ethanol: '0%',
        isopropanol: '0%',
        essentialOils: '0%',
        camphor: '0.5%',
        eucalyptol: '0.1%',
        vitaminAOrDerivatives: '1%',
        cmr: 'None',
        nanomaterials: 'None'
      }
    },
    {
      id: '1',
      ukResponsiblePerson: {
        name: 'Nutrimodel',
        address: {
          address1: '70  Uxbridge Road',
          address2: '',
          townOrCity: 'Skinnet',
          county: '',
          postCode: 'KW12 7YE'
        }
      },
      contactPerson: {
        fullName: 'Tom Wilkinson',
        email: 'tomwilkinson@nutrimodel.com',
        phone: '03069 990643'
      },
      product: {
        productName: 'Zytrexo',
        category: 'Skin',
        subCategory: 'Skin care products',
        subSubCategory: 'Skin lightening products',
        dateAdded: '3 March 2019',
        ethanol: '0%',
        isopropanol: '0%',
        essentialOils: '0%',
        camphor: '0.5%',
        eucalyptol: '0.1%',
        vitaminAOrDerivatives: '1%',
        cmr: 'None',
        nanomaterials: 'None'
      }
    }
  ]
}



