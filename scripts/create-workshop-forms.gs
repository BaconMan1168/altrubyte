/**
 * Creates the Altrubyte workshop forms and one linked master spreadsheet.
 *
 * Run createAltrubyteWorkshopForms() once from the Apps Script editor.
 * The execution log includes the master spreadsheet URL and all form URLs.
 */
const MASTER_SPREADSHEET_NAME = 'Altrubyte Workshop Forms Master';
const SCHEDULING_SHEET_NAME = 'Scheduling';
const IMPACT_SUMMARY_SHEET_NAME = 'Impact Summary';
const MASTER_SPREADSHEET_ID_PROPERTY = 'ALTRUBYTE_MASTER_SPREADSHEET_ID';

const SCHEDULING_HEADERS = [
  'Source form',
  'Name / organization',
  'Contact email',
  'Country / region',
  'Submitted time zone',
  'Preferred local times',
  'Your current timezone',
  'Converted possible times',
  'Status',
  'Follow-up date',
  'Notes',
];

const FORM_DEFINITIONS = [
  {
    key: 'requestWorkshop',
    title: 'Request a Workshop',
    description:
      'For organizations, schools, nonprofits, clubs, and youth groups that want a session for their team or community.',
    sheetName: 'Workshop Requests',
    confirmation:
      "Thanks for requesting a workshop. I\u2019ll follow up by email soon to coordinate details.",
    scheduling: {
      nameTitle: 'Organization name',
      emailTitle: 'Contact email',
      countryTitle: 'Country / region',
      timeZoneTitle: 'Primary time zone',
      preferredTimesTitle: 'Preferred dates/times in your local time zone',
    },
    fields: [
      text('Organization name', true),
      choice('Organization type', true, [
        'School',
        'Student club',
        'Nonprofit/NGO',
        'Youth group',
        'Community group',
        'Other',
      ]),
      text('Organization website or social link', false),
      text('Country / region', true),
      text(
        'Primary time zone',
        true,
        'Example: Singapore SGT / UTC+8, New York ET / UTC-4, London GMT/BST'
      ),
      text('Contact name', true),
      email('Contact email', true),
      text('Contact role', true),
      checks('Who would attend?', true, [
        'Students',
        'Teachers',
        'Staff',
        'Volunteers',
        'Nonprofit team',
        'Club members',
        'Other',
      ]),
      choice('Estimated attendees', true, ['1-15', '16-30', '31-50', '51-100', '100+']),
      choice('Preferred workshop length', true, [
        '45 minutes',
        '60 minutes',
        '90 minutes',
        'Specify',
      ]),
      paragraph('What do you want participants to learn or build?', true),
      paragraph('What workflows/problems could AI tools help with?', false),
      choice('Do participants have laptops/internet?', true, [
        'Yes, mostly',
        'Some do',
        'Not sure',
      ]),
      paragraph(
        'Preferred dates/times in your local time zone',
        false,
        'Example: Tuesdays 4-6pm SGT, weekends after 10am ET'
      ),
      paragraph('Anything else?', false),
      checks('Permission to follow up by email', true, ['Yes']),
    ],
  },
  {
    key: 'publicWorkshop',
    title: 'Join a Public Workshop',
    description:
      'For individuals who want updates for when public AI-assisted coding workshops open and to join them.',
    sheetName: 'Public Workshop Waitlist',
    confirmation:
      "Thanks for joining the waitlist. You\u2019ll hear when public workshops open.",
    scheduling: {
      nameTitle: 'Name',
      emailTitle: 'Email',
      countryTitle: 'Country / region',
      timeZoneTitle: 'Time zone',
      preferredTimesTitle: 'Preferred workshop times',
    },
    fields: [
      text('Name', true),
      email('Email', true),
      text('Country / region', true),
      text(
        'Time zone',
        true,
        'Example: Singapore SGT / UTC+8, New York ET / UTC-4, London GMT/BST'
      ),
      checks('Preferred workshop times', false, [
        'Weekday mornings',
        'Weekday afternoons',
        'Weekday evenings',
        'Weekend mornings',
        'Weekend afternoons',
        'Weekend evenings',
      ]),
      choice('Which best describes you?', true, [
        'Student',
        'Teacher',
        'Nonprofit staff',
        'Volunteer',
        'Club leader',
        'Other',
      ]),
      choice('Coding experience', true, ['None', 'Beginner', 'Intermediate', 'Advanced']),
      choice('AI tool experience', true, [
        'None',
        'Tried ChatGPT/Claude',
        'Used AI coding tools',
        'Regular AI coding tool user',
      ]),
      paragraph('What would you want to build or learn?', false),
      checks('Would you like to hear about future workshops?', true, ['Yes']),
    ],
  },
  {
    key: 'attendeeRegistration',
    title: 'Attendee Registration',
    description: 'For people already attending a specific confirmed workshop.',
    sheetName: 'Attendee Registrations',
    confirmation: "You\u2019re registered. Please bring a laptop with internet if possible.",
    fields: [
      text('Workshop / organization name', true),
      text('Name', true),
      email('Email', true),
      text('School / organization', false),
      choice('Role', true, [
        'Student',
        'Teacher',
        'Staff',
        'Volunteer',
        'Nonprofit worker',
        'Club member',
        'Other',
      ]),
      choice('Coding experience', true, ['None', 'Beginner', 'Intermediate', 'Advanced']),
      checks('AI coding agent access', true, [
        'ChatGPT/Codex',
        'Claude/Claude Code',
        'Cursor',
        'Replit',
        'Other',
        'I do not have access yet',
      ]),
      choice('Do you have a laptop with internet for the workshop?', true, [
        'Yes',
        'No',
        'Not sure',
      ]),
      choice('Photo/screenshot consent', true, [
        'Yes, screenshots/photos may be used for impact reporting',
        'No',
      ]),
      checks('Follow-up consent', false, [
        'I want to receive future resources or workshops',
      ]),
    ],
  },
  {
    key: 'postWorkshopFeedback',
    title: 'Post-Workshop Feedback',
    description: 'For attendees after a session.',
    sheetName: 'Post-Workshop Feedback',
    confirmation:
      'Thank you for the feedback. Your response helps improve and document the impact of the initiative.',
    fields: [
      text('Workshop / organization name', true),
      text('Name', false),
      email('Email', false),
      scale('Overall rating', true, 'Not useful', 'Very useful'),
      scale(
        'Before this workshop, how confident were you using AI coding agents?',
        true,
        'Not confident',
        'Very confident'
      ),
      scale(
        'After this workshop, how confident are you using AI coding agents?',
        true,
        'Not confident',
        'Very confident'
      ),
      paragraph('What did you learn?', true),
      paragraph('What did you build, try, or plan to build?', true),
      scale(
        'How likely are you to use this in your school/org/workflow?',
        true,
        'Not likely',
        'Very likely'
      ),
      paragraph('Testimonial quote', false),
      choice('May we use your testimonial publicly?', true, [
        'Yes, with my name',
        'Yes, anonymously',
        'No',
      ]),
      choice('Would you recommend this workshop to another group?', true, [
        'Yes',
        'Maybe',
        'No',
      ]),
      choice('Interested in becoming an ambassador/facilitator?', false, [
        'Yes',
        'Maybe',
        'No',
      ]),
      paragraph('Any suggestions?', false),
    ],
  },
  {
    key: 'ambassadorApplication',
    title: 'Ambassador Application',
    description: 'For people who want to help work on and expand the initiative.',
    sheetName: 'Ambassador Applications',
    confirmation:
      "Thanks for applying. I\u2019ll follow up with next steps if there\u2019s a fit.",
    scheduling: {
      nameTitle: 'Name',
      emailTitle: 'Email',
      countryTitle: 'Country / region',
      timeZoneTitle: 'Time zone',
      preferredTimesTitle: 'Preferred training call times in your local time zone',
    },
    fields: [
      text('Name', true),
      email('Email', true),
      text('Country / region', true),
      text(
        'Time zone',
        true,
        'Example: Singapore SGT / UTC+8, New York ET / UTC-4, London GMT/BST'
      ),
      text('School / organization', false),
      paragraph('Why do you want to become an ambassador?', true),
      checks('Relevant experience', true, [
        'Coding',
        'AI tools',
        'Teaching/tutoring',
        'Club leadership',
        'Nonprofit/volunteer work',
        'Event organizing',
        'Other',
      ]),
      choice('Coding experience', true, ['Beginner', 'Intermediate', 'Advanced']),
      choice('AI coding agent experience', true, [
        'Beginner',
        'Intermediate',
        'Advanced',
      ]),
      checks('Who could you run workshops for?', true, [
        'My school',
        'Student clubs',
        'Nonprofits',
        'Youth groups',
        'Online communities',
        'Other',
      ]),
      choice('Can you attend a 45-minute training call?', true, [
        'Yes',
        'No',
        'Not sure',
      ]),
      paragraph(
        'Preferred training call times in your local time zone',
        false,
        'Example: Tuesdays 4-6pm SGT, weekends after 10am ET'
      ),
      paragraph('Anything else we should know?', false),
    ],
  },
];

function createAltrubyteWorkshopForms() {
  const spreadsheet = SpreadsheetApp.create(MASTER_SPREADSHEET_NAME);
  const properties = PropertiesService.getScriptProperties();
  properties.setProperty(MASTER_SPREADSHEET_ID_PROPERTY, spreadsheet.getId());

  deleteWorkshopFormSubmitTriggers_();

  const createdForms = FORM_DEFINITIONS.map((definition) => {
    const form = createForm_(definition);
    const responseSheet = connectFormToResponseSheet_(
      form,
      spreadsheet,
      definition.sheetName
    );

    properties.setProperty(formPropertyKey_(form.getId()), definition.key);

    if (definition.scheduling) {
      ScriptApp.newTrigger('handleWorkshopFormSubmit')
        .forForm(form)
        .onFormSubmit()
        .create();
    }

    return {
      title: definition.title,
      publishedUrl: form.getPublishedUrl(),
      editUrl: form.getEditUrl(),
      responseSheetName: responseSheet.getName(),
    };
  });

  removeDefaultSheet_(spreadsheet);
  setupSchedulingSheet_(spreadsheet);
  setupImpactSummarySheet_(spreadsheet);
  orderSheets_(spreadsheet);

  Logger.log('Master spreadsheet: %s', spreadsheet.getUrl());
  createdForms.forEach((createdForm) => {
    Logger.log(
      '%s | responses: %s | published: %s | edit: %s',
      createdForm.title,
      createdForm.responseSheetName,
      createdForm.publishedUrl,
      createdForm.editUrl
    );
  });
}

function handleWorkshopFormSubmit(event) {
  const form = event.source;
  const definition = getDefinitionForForm_(form);

  if (!definition || !definition.scheduling) {
    return;
  }

  const spreadsheetId = PropertiesService.getScriptProperties().getProperty(
    MASTER_SPREADSHEET_ID_PROPERTY
  );
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const schedulingSheet = spreadsheet.getSheetByName(SCHEDULING_SHEET_NAME);
  const answers = getAnswerMap_(event.response);
  const fields = definition.scheduling;

  schedulingSheet.appendRow([
    definition.title,
    answers[fields.nameTitle] || '',
    answers[fields.emailTitle] || '',
    answers[fields.countryTitle] || '',
    answers[fields.timeZoneTitle] || '',
    answers[fields.preferredTimesTitle] || '',
    Session.getScriptTimeZone(),
    '',
    'New',
    '',
    '',
  ]);
}

function createForm_(definition) {
  const form = FormApp.create(definition.title)
    .setDescription(definition.description)
    .setConfirmationMessage(definition.confirmation)
    .setCollectEmail(false)
    .setAllowResponseEdits(false)
    .setProgressBar(false);

  definition.fields.forEach((field) => addItem_(form, field));
  return form;
}

function addItem_(form, field) {
  let item;

  if (field.type === 'text') {
    item = form.addTextItem();
  } else if (field.type === 'paragraph') {
    item = form.addParagraphTextItem();
  } else if (field.type === 'multipleChoice') {
    item = form.addMultipleChoiceItem().setChoiceValues(field.options);
  } else if (field.type === 'checkbox') {
    item = form.addCheckboxItem().setChoiceValues(field.options);
  } else if (field.type === 'scale') {
    item = form
      .addScaleItem()
      .setBounds(1, 5)
      .setLabels(field.lowLabel, field.highLabel);
  } else {
    throw new Error('Unsupported field type: ' + field.type);
  }

  item.setTitle(field.title).setRequired(field.required);

  if (field.helpText) {
    item.setHelpText(field.helpText);
  }

  if (field.emailValidation) {
    const validation = FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText('Enter a valid email address.')
      .build();
    item.setValidation(validation);
  }
}

function connectFormToResponseSheet_(form, spreadsheet, sheetName) {
  const existingSheetIds = spreadsheet.getSheets().map((sheet) => sheet.getSheetId());

  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());
  SpreadsheetApp.flush();
  Utilities.sleep(1500);

  const responseSheet = spreadsheet
    .getSheets()
    .find((sheet) => existingSheetIds.indexOf(sheet.getSheetId()) === -1);

  if (!responseSheet) {
    throw new Error('Could not find response sheet for form: ' + form.getTitle());
  }

  responseSheet.setName(sheetName);
  responseSheet.setFrozenRows(1);
  return responseSheet;
}

function setupSchedulingSheet_(spreadsheet) {
  const sheet = spreadsheet.insertSheet(SCHEDULING_SHEET_NAME);
  sheet.getRange(1, 1, 1, SCHEDULING_HEADERS.length).setValues([SCHEDULING_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, SCHEDULING_HEADERS.length);
}

function setupImpactSummarySheet_(spreadsheet) {
  const metrics = [
    ['Metric', 'Value'],
    ['Total workshop requests', countFormula_('Workshop Requests')],
    [
      'Total public workshop waitlist signups',
      countFormula_('Public Workshop Waitlist'),
    ],
    ['Total attendee registrations', countFormula_('Attendee Registrations')],
    ['Total feedback responses', countFormula_('Post-Workshop Feedback')],
    [
      'Average workshop rating',
      averageFormula_('Post-Workshop Feedback', 'Overall rating'),
    ],
    [
      'Average confidence before workshop',
      averageFormula_(
        'Post-Workshop Feedback',
        'Before this workshop, how confident were you using AI coding agents?'
      ),
    ],
    [
      'Average confidence after workshop',
      averageFormula_(
        'Post-Workshop Feedback',
        'After this workshop, how confident are you using AI coding agents?'
      ),
    ],
    [
      'Average likelihood to use in school/org/workflow',
      averageFormula_(
        'Post-Workshop Feedback',
        'How likely are you to use this in your school/org/workflow?'
      ),
    ],
    [
      'Total ambassador applications',
      countFormula_('Ambassador Applications'),
    ],
  ];

  const sheet = spreadsheet.insertSheet(IMPACT_SUMMARY_SHEET_NAME);
  sheet.getRange(1, 1, metrics.length, 2).setValues(metrics);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 2);
}

function orderSheets_(spreadsheet) {
  const sheetNames = FORM_DEFINITIONS.map((definition) => definition.sheetName).concat([
    SCHEDULING_SHEET_NAME,
    IMPACT_SUMMARY_SHEET_NAME,
  ]);

  sheetNames.forEach((sheetName, index) => {
    const sheet = spreadsheet.getSheetByName(sheetName);
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(index + 1);
  });
}

function removeDefaultSheet_(spreadsheet) {
  const defaultSheet = spreadsheet.getSheetByName('Sheet1');

  if (defaultSheet && spreadsheet.getSheets().length > 1) {
    spreadsheet.deleteSheet(defaultSheet);
  }
}

function deleteWorkshopFormSubmitTriggers_() {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    if (trigger.getHandlerFunction() === 'handleWorkshopFormSubmit') {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function getDefinitionForForm_(form) {
  const definitionKey = PropertiesService.getScriptProperties().getProperty(
    formPropertyKey_(form.getId())
  );

  return FORM_DEFINITIONS.find((definition) => definition.key === definitionKey);
}

function getAnswerMap_(formResponse) {
  return formResponse.getItemResponses().reduce((answers, itemResponse) => {
    const title = itemResponse.getItem().getTitle();
    const response = itemResponse.getResponse();
    answers[title] = Array.isArray(response) ? response.join(', ') : response;
    return answers;
  }, {});
}

function countFormula_(sheetName) {
  return '=MAX(COUNTA(\'' + sheetName + '\'!A:A)-1,0)';
}

function averageFormula_(sheetName, header) {
  return (
    '=IFERROR(AVERAGE(INDEX(\'' +
    sheetName +
    '\'!A:ZZ,0,MATCH("' +
    header +
    '",\'' +
    sheetName +
    '\'!1:1,0))),0)'
  );
}

function formPropertyKey_(formId) {
  return 'FORM_DEFINITION_KEY_' + formId;
}

function text(title, required, helpText) {
  return {
    type: 'text',
    title: title,
    required: required,
    helpText: helpText || '',
  };
}

function email(title, required) {
  const field = text(title, required);
  field.emailValidation = true;
  return field;
}

function paragraph(title, required, helpText) {
  return {
    type: 'paragraph',
    title: title,
    required: required,
    helpText: helpText || '',
  };
}

function choice(title, required, options) {
  return {
    type: 'multipleChoice',
    title: title,
    required: required,
    options: options,
  };
}

function checks(title, required, options) {
  return {
    type: 'checkbox',
    title: title,
    required: required,
    options: options,
  };
}

function scale(title, required, lowLabel, highLabel) {
  return {
    type: 'scale',
    title: title,
    required: required,
    lowLabel: lowLabel,
    highLabel: highLabel,
  };
}
