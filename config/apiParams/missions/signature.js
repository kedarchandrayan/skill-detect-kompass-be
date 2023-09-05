const rootPrefix = '../../../..',
  standardResponse = require(rootPrefix + '/lib/standardResponse'),
  checklistPropertyConstants = require(rootPrefix + '/lib/globalConstant/model/checklistProperty'),
  apiNameConstants = require(rootPrefix + '/lib/globalConstant/apiName');

const missionConfig = {
  [apiNameConstants.missionCreate]: {
    mandatory: [
      {
        parameter: 'name',
        validatorConfig: {
          validateNonEmptyString: standardResponse.errorMessage.invalidNonEmptyString('name')
        }
      },
      {
        parameter: 'resume_folder_url',
        validatorConfig: {
          // Todo:: validate url later
          validateNonEmptyString: standardResponse.errorMessage.invalidNonEmptyString('resume_folder_url')
        }
      }
    ],
    optional: [
      {
        parameter: 'skills',
        validatorConfig: {
          validateNonEmptyStringArray: standardResponse.errorMessage.invalidNonEmptyStringArray('skills')
        }
      },
      {
        parameter: 'total_experience_details',
        validatorConfig: {
          // Todo:: Stringified JSON object
          validateNonEmptyString: standardResponse.errorMessage.invalidNonEmptyString('total_experience_details')
        }
      },
      {
        parameter: 'min_cgpa',
        validatorConfig: {
          validateNaturalNumber: standardResponse.errorMessage.invalidCGPA
        }
      },
      {
        parameter: 'custom_selection_criteria',
        validatorConfig: {
          validateNonEmptyString: standardResponse.errorMessage.invalidNonEmptyString('custom_selection_criteria')
          // Todo:: @Shraddha validate selection criteria length
          // validateChecklistDescriptionLength: standardResponse.errorMessage.tooLongString(
          //   'description',
          //   checklistPropertyConstants.maxDescriptionSize
          // )
        }
      }
    ]
  }
};

module.exports = missionConfig;