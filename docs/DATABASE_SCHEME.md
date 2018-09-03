Account:
* FIRST_NAME - First name of user
* LAST_NAME - Last name of user
* USERNAME - The users username
* EMAIL - The users email
* LOGO - The users profile picture

Info:
* ACCOUNT_ID - Foreign Account ID
* DATE_CREATED - Date user created account
* DATE_UPDATED - Date user updated account
* DATE_BIRTH  - The date of the birthday

Passwords:
* ACCOUNT_ID
* CONTENT
* SALT
* DATE_CHANGED

Session:
* CLIENT
* UNIQUE_ID
* IP_ADDRESS
* ACCOUNT_ID
* DATE_CREATED
* DATE_UPDATED
* DATE_EXPIRES
* UNAUTHORIZED

Client:
* DEVICE_TYPE
* ACCOUNT_ID
* UNIQUE_ID
* BROWSER
* DEVICE
* OS

Organizations:
* NAME
* USERNAME
* ACCOUNT_ID
* DESCRIPTION - Description of the organization
* DATE_CREATED - Date the event was created in UTC EPOCH time
* TYPE

Organization_Members:
* ACCOUNT_ID
* ORGANIZATION_ID
* DATE_JOINED
* ADMIN

Events:
* NAME - Name of the event
* LOCATION - Location of the event
* ACCOUNT_ID - User who started the event
* DESCRIPTION - Description of the event
* CANCELLED_DATE - Date the event is cancelled. Null if it's not real
* ORGANIZATION_ID - Organization that owns the event
* DATE_START - The UTC EPOCH time the event starts
* DATE_END - The UTC EPOCH time the even ends
* TAGS - The tags of the event

Event_Members:
* EVENT_ID - The event foreign key
* ACCOUNT_ID - The account foreign key
* DATE_START - The start date
* DATE_END - The end date
* SIGNED_ID - The account who signed off on it
* DATE_SIGNED - The date the account signed off on it