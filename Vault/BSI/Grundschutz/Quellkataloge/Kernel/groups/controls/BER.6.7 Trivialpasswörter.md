---
tags:
- credential_stuffing_password_policy
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.6.7 Trivialpasswörter
stmt_target_object_category: Nutzende
stmt_modal_verb: SOLLTE
stmt_action_word: blockieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.6.7 - Trivialpasswörter
> [!example]- Tags:> [[tags_Credential_Stuffing|Credential Stuffing]]> [[tags_Password_Policy|Password Policy]]
Gruppe: [BER.6 Passwortgebrauch](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.6%20Passwortgebrauch.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Passwortgebrauch](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.6%20Passwortgebrauch.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Nutzende](target_object_categories_Nutzende_38125c38-8895-493c-ba73-77ac1029d02d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Verwendung von Trivialpassworten |  | [blockieren](action_words_blockieren_2abccead-8fc1-4f04-af4b-8c5ff796bd67) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Nutzende SOLLTE die Verwendung von Trivialpassworten blockieren.</span>

> [!info]- Guidance
>Trivialpasswörter sind leicht zu erratende oder zu diesem Zugangskonto bereits öffentlich bekannte Passwörter (erkennbar durch Nutzung sog. Leak Check Datenbanken). Leicht zu erraten sind Passwörter, wenn sie mit gängigen Wörterbuchangriffen (dictionary attacks) bzw. systematischem Ausprobieren (brute force) in kurzer Zeit zu kompromittieren sind. Dazu zählen etwa einfache Folgen wie „123456“, „Passwort“ oder „qwerty“ sowie häufig vorkommende, in Leaks dokumentierte Standardkombinationen. Der Zweck der Anforderung liegt darin, das Risiko unautorisierter Zugriffe zu reduzieren: Ein Angreifer könnte mit automatisierten Tools in Sekunden oder Minuten triviale Passwörter durchprobieren, was zu einem unbefugten Zugriff auf Benutzerkonten, Systemressourcen oder sensible Daten führen könnte. Die Blockierung solcher Passwörter kann dagegen sicherstellen, dass nur schwer vorhersehbare Kennwörter verwendet werden, wodurch ein entscheidender Schutz gegen automatisierte Angriffsverfahren erreicht werden kann.  Zudem können Passwortmanager beim Generieren nicht-trivialer Passwörter unterstützen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f0722999-f8c4-4c75-810b-94d7563dd698 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | f0722999-f8c4-4c75-810b-94d7563dd698 |
