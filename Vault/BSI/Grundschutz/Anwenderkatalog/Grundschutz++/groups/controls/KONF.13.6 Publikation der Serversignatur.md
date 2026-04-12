---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.6 Publikation der Serversignatur
stmt_target_object_category: E-Mail
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.6 - Publikation der Serversignatur
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [E-Mail](target_object_categories_E-Mail_7aa03e0c-a417-4b08-a6d5-b89bd63c6a83) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Publikation der Serversignatur | im DNS | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für E-Mail SOLLTE die Publikation der Serversignatur im DNS aktivieren.</span>

> [!info]- Guidance
>Eine Serversignatur, auch bekannt als DKIM (DomainKeys Identified Mail), ist eine kryptografische Signatur, die der E-Mail-Dienst der Institution an jede ausgehende Nachricht anhängt. Sie stellt sicher, dass die E-Mail tatsächlich von der angegebenen Domain gesendet wurde und während der Übertragung nicht manipuliert wurde. Ohne diese Signatur könnte ein Angreifer E-Mails im Namen der Institution versenden (E-Mail-Spoofing), was zu Phishing-Angriffen, dem Diebstahl von Zugangsdaten oder der Verbreitung von Malware führen könnte. Das Aktivieren der Publikation im DNS bedeutet, den öffentlichen Teil dieses kryptografischen Schlüssels im Domain Name System (DNS) der Domain zu veröffentlichen. Empfangende E-Mail-Server können diesen öffentlichen Schlüssel verwenden, um die Signatur der E-Mail zu verifizieren und somit deren Echtheit zu bestätigen. Zur Umsetzung kann die Institution E-Mail-Server-Software so konfigurieren, dass sie DKIM-Signaturen automatisch zu ausgehenden Nachrichten hinzufügt. Dies kann oft durch die Installation und Konfiguration von speziellen DKIM-Filter-Plugins erreicht werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | faf3fea5-b891-4d47-a2f7-74756b02a668 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | faf3fea5-b891-4d47-a2f7-74756b02a668 |
