/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useCallback } from 'react';
import { reactTranslator } from '../../../../common/translators/reactTranslator';
import { Forward, ForwardAction, ForwardFrom } from '../../../../common/forward';

import { MessageType } from '../../../../common/messages';
import { getParams } from '../../getParams';
import { messenger } from '../../../services/messenger';

import '../../styles/index.pcss';

export const ADGUARD_SITE_URL = Forward.get({
    action: ForwardAction.AdguardSite,
    from: ForwardFrom.Adblocker,
});

export const AdBlocked = () => {
    const { rule, url } = getParams();

    const handleGoBack = useCallback((e) => {
        e.preventDefault();
        window.history.back();
    }, []);

    const handleProceed = useCallback((e) => {
        e.preventDefault();
        messenger.sendMessage(MessageType.AddUrlToTrusted, { url });
    }, [url]);

    return (
        <div className="alert alert--gold" id="app">
            <div className="alert__in">
                <div className="alert__header alert__header--gold">
                    <div className="alert__header-title">
                        {reactTranslator.getMessage('blocking_pages_rule_header_title')}
                    </div>
                </div>
                <div className="alert__body">
                    <a href={ADGUARD_SITE_URL} className="alert__logo" />
                    <div className="hero hero--green" />
                    <div className="alert__body-title">
                        <span>
                            {reactTranslator.getMessage('blocking_pages_rule_content_title')}
                        </span>
                    </div>
                    <div className="alert__rule">
                        {rule}
                    </div>
                    <div className="alert__btns">
                        <button
                            type="button"
                            onClick={handleGoBack}
                            className="button button--green alert__btn"
                        >
                            {reactTranslator.getMessage('blocking_pages_btn_go_back')}
                        </button>
                        <button type="button" onClick={handleProceed} className="button button--white alert__btn">
                            {reactTranslator.getMessage('blocking_pages_btn_proceed')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
