import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { SettingsSection } from '../Settings/SettingsSection';
import { SettingsSetCheckbox } from '../Settings/SettingsSetCheckbox';
import { Setting, SETTINGS_TYPES } from '../Settings/Setting';
import { rootStore } from '../../stores/RootStore';
import { Log } from '../../../../common/log';
import { reactTranslator } from '../../../../common/translators/reactTranslator';
import {
    GLOBAL_PRIVACY_CONTROL_URL,
    DO_NOT_TRACK_URL,
} from '../../constants';

import {
    DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN,
    DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN,
} from '../../../../common/settings';

const BlockKnownTrackers = 'blockKnownTrackers';
const STRIP_TRACKING_PARAMETERS = 'stripTrackingParameters';

const Stealth = observer(() => {
    const { settingsStore } = useContext(rootStore);
    const { settings, blockKnownTrackers, stripTrackingParameters } = settingsStore;

    if (!settings) {
        return null;
    }

    const blockKnownTrackersChangeHandler = async ({ data }) => {
        await settingsStore.setBlockKnownTrackersState(data);
    };

    const stripTrackingParametersChangeHandler = async ({ data }) => {
        await settingsStore.setStripTrackingParametersState(data);
    };

    const settingChangeHandler = async ({ id, data }) => {
        Log.info(`Setting ${id} set to ${data}`);
        await settingsStore.updateSetting(id, data);
    };

    const {
        DisableStealthMode,
        SelfDestructThirdPartyCookies,
        SelfDestructThirdPartyCookiesTime,
        SelfDestructFirstPartyCookies,
        SelfDestructFirstPartyCookiesTime,
        HideReferrer,
        HideSearchQueries,
        SendDoNotTrack,
        BlockWebRTC,
        BlockChromeClientData,
    } = settings.names;

    const isStealthModeDisabled = settings.values[DisableStealthMode];
    const isThirdPartyCookiesEnabled = settings.values[SelfDestructThirdPartyCookies];
    const isFirstPartyCookiesEnabled = settings.values[SelfDestructFirstPartyCookies];

    return (
        <>
            <SettingsSection
                title={reactTranslator.getMessage('options_privacy_title')}
                description={reactTranslator.getMessage('options_privacy_desc')}
                mode="smallContainer"
                id={DisableStealthMode}
                inlineControl={(
                    <Setting
                        id={DisableStealthMode}
                        type={SETTINGS_TYPES.CHECKBOX}
                        label={reactTranslator.getMessage('options_privacy_title')}
                        inverted
                        value={settings.values[DisableStealthMode]}
                        handler={settingChangeHandler}
                    />
                )}
            />

            <SettingsSection
                title={reactTranslator.getMessage('options_stealth_general_title')}
                mode="subTitle"
                disabled={isStealthModeDisabled}
            >
                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_block_known_trackers_title')}
                    description={reactTranslator.getMessage('options_block_known_trackers_description')}
                    disabled={!blockKnownTrackers}
                    sectionDisabled={isStealthModeDisabled}
                    id={BlockKnownTrackers}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_block_known_trackers_title')}
                    value={blockKnownTrackers}
                    handler={blockKnownTrackersChangeHandler}
                />

                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_strip_tracking_params_title')}
                    description={reactTranslator.getMessage('options_strip_tracking_params_description')}
                    disabled={!stripTrackingParameters}
                    sectionDisabled={isStealthModeDisabled}
                    id={STRIP_TRACKING_PARAMETERS}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_strip_tracking_params_title')}
                    value={stripTrackingParameters}
                    handler={stripTrackingParametersChangeHandler}
                />
                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_hide_search_queries_title')}
                    description={reactTranslator.getMessage('options_hide_search_queries_desc')}
                    disabled={!settings.values[HideSearchQueries]}
                    sectionDisabled={isStealthModeDisabled}
                    id={HideSearchQueries}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_hide_search_queries_title')}
                    value={settings.values[HideSearchQueries]}
                    handler={settingChangeHandler}
                />
                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_send_not_track_title')}
                    description={reactTranslator.getMessage('options_send_not_track_desc', {
                        gpc: (chunks) => (
                            <a
                                className="desc--link"
                                href={GLOBAL_PRIVACY_CONTROL_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {chunks}
                            </a>
                        ),
                        dnt: (chunks) => (
                            <a
                                className="desc--link"
                                href={DO_NOT_TRACK_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {chunks}
                            </a>
                        ),
                    })}
                    disabled={!settings.values[SendDoNotTrack]}
                    sectionDisabled={isStealthModeDisabled}
                    id={SendDoNotTrack}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_send_not_track_title')}
                    value={settings.values[SendDoNotTrack]}
                    handler={settingChangeHandler}
                />
            </SettingsSection>

            <SettingsSection
                title={reactTranslator.getMessage('options_stealth_cookies_title')}
                mode="subTitle"
                disabled={isStealthModeDisabled}
            >
                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_third_party_title')}
                    description={reactTranslator.getMessage('options_third_party_desc')}
                    disabled={!isThirdPartyCookiesEnabled}
                    sectionDisabled={isStealthModeDisabled}
                    id={SelfDestructThirdPartyCookies}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_third_party_title')}
                    value={isThirdPartyCookiesEnabled}
                    handler={settingChangeHandler}
                >
                    <Setting
                        id={SelfDestructThirdPartyCookiesTime}
                        disabled={!isThirdPartyCookiesEnabled || isStealthModeDisabled}
                        type={SETTINGS_TYPES.INPUT}
                        value={settings.values[SelfDestructThirdPartyCookiesTime]}
                        handler={settingChangeHandler}
                        placeholder={DEFAULT_THIRD_PARTY_COOKIES_SELF_DESTRUCT_MIN}
                    />
                </SettingsSetCheckbox>

                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_first_party_title')}
                    description={reactTranslator.getMessage('options_first_party_desc')}
                    disabled={!isFirstPartyCookiesEnabled}
                    sectionDisabled={isStealthModeDisabled}
                    id={SelfDestructFirstPartyCookies}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_first_party_title')}
                    value={isFirstPartyCookiesEnabled}
                    handler={settingChangeHandler}
                >
                    <Setting
                        id={SelfDestructFirstPartyCookiesTime}
                        disabled={!isFirstPartyCookiesEnabled || isStealthModeDisabled}
                        type={SETTINGS_TYPES.INPUT}
                        value={settings.values[SelfDestructFirstPartyCookiesTime]}
                        handler={settingChangeHandler}
                        placeholder={DEFAULT_FIRST_PARTY_COOKIES_SELF_DESTRUCT_MIN}
                    />
                </SettingsSetCheckbox>
            </SettingsSection>

            <SettingsSection
                title={reactTranslator.getMessage('options_stealth_miscellaneous_title')}
                mode="subTitle"
                disabled={isStealthModeDisabled}
            >
                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_hide_referrer_title')}
                    description={reactTranslator.getMessage('options_hide_referrer_desc')}
                    disabled={!settings.values[HideReferrer]}
                    sectionDisabled={isStealthModeDisabled}
                    id={HideReferrer}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_hide_referrer_title')}
                    value={settings.values[HideReferrer]}
                    handler={settingChangeHandler}
                />

                {settingsStore.isChrome && (
                    <SettingsSetCheckbox
                        title={reactTranslator.getMessage('options_remove_client_data_title')}
                        description={reactTranslator.getMessage('options_remove_client_data_desc')}
                        disabled={!settings.values[BlockChromeClientData]}
                        sectionDisabled={isStealthModeDisabled}
                        id={BlockChromeClientData}
                        type={SETTINGS_TYPES.CHECKBOX}
                        label={reactTranslator.getMessage('options_remove_client_data_title')}
                        value={settings.values[BlockChromeClientData]}
                        handler={settingChangeHandler}
                    />
                )}

                <SettingsSetCheckbox
                    title={reactTranslator.getMessage('options_disable_webrtc_title')}
                    description={reactTranslator.getMessage('options_disable_webrtc_desc')}
                    disabled={!settings.values[BlockWebRTC]}
                    sectionDisabled={isStealthModeDisabled}
                    id={BlockWebRTC}
                    type={SETTINGS_TYPES.CHECKBOX}
                    label={reactTranslator.getMessage('options_disable_webrtc_title')}
                    value={settings.values[BlockWebRTC]}
                    handler={settingChangeHandler}
                />
            </SettingsSection>
        </>
    );
});

export { Stealth };
