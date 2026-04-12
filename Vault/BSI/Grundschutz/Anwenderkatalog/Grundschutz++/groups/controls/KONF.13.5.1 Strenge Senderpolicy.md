---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.5.1 Strenge Senderpolicy
parent_control: KONF.13.5 Publikation der Sendeberechtigung
stmt_target_object_category: E-Mail
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.5.1 - Strenge Senderpolicy
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.5 Publikation der Sendeberechtigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.5%20Publikation%20der%20Sendeberechtigung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [E-Mail](target_object_categories_E-Mail_7aa03e0c-a417-4b08-a6d5-b89bd63c6a83) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine strenge Senderpolicy |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für E-Mail SOLLTE eine strenge Senderpolicy aktivieren.</span>

> [!info]- Guidance
>Ein strenger Senderpolicy-Eintrag, auch "hard fail" (-all) genannt, weist empfangende Mailserver an, E-Mails, die von nicht autorisierten Servern stammen, zurückzuweisen oder als Spam zu markieren. Dies kann das Risiko von Phishing-Angriffen erheblich reduzieren, bei denen Angreifer versuchen, sich als vertrauenswürdige Institutionen auszugeben. Eine solche Konfiguration kann auch Spoofing verhindern, bei dem die Absenderadresse gefälscht wird, was dazu führen könnte, dass Kunden oder Mitarbeiter betrügerischen Anweisungen folgen, die scheinbar von der Institution selbst stammen. Zur Umsetzung einer strengen Senderpolicy kann die Institution sicherstellen, dass sie einen SPF-Eintrag in ihren DNS-Einstellungen hinterlegt. Dieser Eintrag sollte alle autorisierten Server explizit auflisten und mit dem "-all" Mechanismus enden, um eine strikte Ablehnung nicht konformer E-Mails zu signalisieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b44ec8f5-20f7-43ad-94a6-545a12cc7a67 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | b44ec8f5-20f7-43ad-94a6-545a12cc7a67 |
