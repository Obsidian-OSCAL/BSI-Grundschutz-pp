---
tags:
- credential_stuffing_privilege_escalation_password_policy
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: SENS.4.1.2 Untersagung von Passwort Recycling
parent_control: SENS.4.1 Personengebundene Authentisierungsmittel
stmt_target_object_category: Nutzende
stmt_modal_verb: SOLLTE
stmt_action_word: untersagen
stmt_documentation: Arbeitsanweisung
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# SENS.4.1.2 - Untersagung von Passwort Recycling
> [!example]- Tags:> [[tags_Credential_Stuffing|Credential Stuffing]]> [[tags_Privilege_Escalation|Privilege Escalation]]> [[tags_Password_Policy|Password Policy]]
Gruppe: [SENS.4 Authentisierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/SENS.4%20Authentisierung.md)
---

** Übergeordnetes Control: ** [SENS.4.1 Personengebundene Authentisierungsmittel](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/SENS.4.1%20Personengebundene%20Authentisierungsmittel.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Sensibilisierung (SENS)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/SENS%20Sensibilisierung.md)*<br> *  &rarr; [Authentisierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/SENS.4%20Authentisierung.md) *</div> | [Sensibilisierung](practices_Sensibilisierung_66da6dfc-8bb3-4dcb-9809-72f3be19845e) | [Nutzende](target_object_categories_Nutzende_38125c38-8895-493c-ba73-77ac1029d02d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Wiederverwendung von Passwörtern |  | [untersagen](action_words_untersagen_6789d951-1904-4753-a1db-ee1c4e18aeed) | [Arbeitsanweisung](documentation_guidelines_Arbeitsanweisung) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Sensibilisierung für Nutzende SOLLTE die Wiederverwendung von Passwörtern untersagen.</span>

> [!info]- Guidance
>Wiederverwendung von Passwörtern bezeichnet  die Nutzung identischer Zugangsdaten für verschiedene Systeme, Dienste oder Anwendungen. Werden identische Passwörter auf unterschiedlichen Systemen eingesetzt, steigt die Wahrscheinlichkeit, dass ein Angreifer mit einem einzigen erlangten Passwort Zugriff auf weitere Konten erhält („Credential Stuffing“). Ein Vorfall könnte beispielsweise darin bestehen, dass ein externer Angreifer durch ein Datenleck bei einem Drittanbieter an ein altes Passwort gelangt und damit Zugang zu internen Diensten erhält, wenn die betroffene Person dieses Passwort mehrfach genutzt hat. Auch im internen Umfeld kann die Wiederverwendung von Passwörtern dazu führen, dass unbefugte Dritte über abgefangene oder mitgehörte Anmeldedaten Zugang zu sensiblen Bereichen erhalten. Die Anforderung zielt also auf eine Reduzierung der Angriffsfläche durch Verhinderung von Kettenreaktionen, die aus nur einem kompromittierten Passwort entstehen können. Mit „Wiederverwendung“ ist sowohl die Verwendung desselben Passworts an verschiedenen Zugangskonten oder IT-Systemen, also auch eine zeitlich wiederholte Nutzung früherer Passwörter gemeint.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0573247f-65f3-4768-9d27-6c9c0f42c6cd |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 0573247f-65f3-4768-9d27-6c9c0f42c6cd |
