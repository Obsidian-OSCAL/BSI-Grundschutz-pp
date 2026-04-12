---
tags:
- credential_stuffing_brute-force-attacke
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.7 Hinweise bei Anmeldefehlern
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: deaktivieren
stmt_documentation: Konfigurationshistorie
result_reference:
- Zugang
- Zugangskonto
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.7 - Hinweise bei Anmeldefehlern
> [!example]- Tags:> [[tags_Credential Stuffing|Credential Stuffing]]> [[tags_Brute-Force-Attacke|Brute-Force-Attacke]]
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Hinweise darauf, ob ein Zugangskonto existiert | bei erfolglosen Anmeldeversuchen | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Anwendungen SOLLTE Hinweise darauf, ob ein Zugangskonto existiert bei erfolglosen Anmeldeversuchen deaktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |> > | [Zugangskonto](result_Zugangskonto_00000000-0000-0000-0000-000000000000) | Anmeldekonto (User Account) zur Anmeldung an einem IT-System oder einer Anwendung. |

> [!info]- Guidance
>Den Hinweis, dass bei erfolglosen Anmeldeversuchen das Passwort oder die Kennung falsch ist, könnte ein Angreifer als sogenannte User Enumeration (Benutzerkonten-Aufzählung) oder Account Discovery (Konto-Entdeckung) Schwachstelle ausnutzen. Dadurch wird das Risiko einer Brute-Force-Attacke oder eines Credential Stuffings erhöht, bei der ein Angreifer eine Liste potenzieller Benutzernamen durchprobieren könnte, um gültige Konten zu identifizieren. Der Schutz kann gewährleisten, dass ein Angreifer nicht automatisch weiß, welche Konten er als Nächstes mit Passwörtern attackieren muss oder Rückschlüsse auf registrierte Zugangskonten erhält. Zur Umsetzung kann die Institution alle Rückmeldungen bei fehlgeschlagenen Anmeldeversuchen so vereinheitlichen, dass sie keinen Aufschluss über den Grund des Fehlschlags geben, beispielsweise durch die generische Nachricht „Der eingegebene Benutzername oder das Passwort ist ungültig.“.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dd5fcc0c-d602-4d15-839c-5adb4fef150e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | dd5fcc0c-d602-4d15-839c-5adb4fef150e |
