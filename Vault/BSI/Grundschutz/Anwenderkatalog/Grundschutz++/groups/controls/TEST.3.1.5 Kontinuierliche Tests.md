---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.5 Kontinuierliche Tests
parent_control: TEST.3.1 Sicherheitstest
stmt_modal_verb: KANN
stmt_action_word: testen
stmt_documentation: Freigabeplan
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.5 - Kontinuierliche Tests
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)*<br> *  &rarr; [Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md) *</div> | [Änderungen und Tests](practices_Änderungen und Tests_554ba2da-7317-4792-8548-141250039260) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Auswirkungen | bei jeder Änderung automatisch | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Änderungen und Tests KANN die Auswirkungen bei jeder Änderung automatisch testen.</span>

> [!info]- Guidance
>„Automatisch testen“ meint den Einsatz technischer Verfahren oder Werkzeuge („continuous testing“), um bei Änderungen an Systemen oder Anwendungen unmittelbar und ohne manuelles Eingreifen Prüfungen auszuführen. Gemeint sind hier vordefinierte Testszenarien, die mit jedem Update, Patch oder Konfigurationswechsel ablaufen und systematisch überprüfen, ob die vorgesehenen Funktionen erhalten bleiben und ob unerwünschte Nebenwirkungen auftreten. Der Zweck liegt darin, dass Änderungen zwar notwendig sind, diese aber unbeabsichtigte Sicherheitslücken oder Funktionsstörungen mit sich bringen könnten – ein fehlerhaftes Update könnte beispielsweise Authentifizierungsprozesse umgehen lassen oder kritische Daten unzugänglich machen. Durch automatisierte Tests kann die Institution dagegen frühzeitig erkennen, ob eine Änderung die Vertraulichkeit, Integrität oder Verfügbarkeit gefährden könnte, und die Fehlerquote im Betrieb insgesamt senken. Umsetzungsmöglichkeiten können unterschiedlich gestaltet werden: Eine Institution kann (1) Continuous-Integration/Continuous-Delivery-Pipelines (CI/CD) einrichten, in die automatisierte Unit- und Integrationstests integriert sind, (2) produktionsnahe Szenarien in Testumgebungen abbilden und in denen Sicherheitstests automatisch mitlaufen, oder (3) Skripte einsetzen, die nach Konfigurationsänderungen direkt auf bekannte Schwachstellen oder das Vorhandensein von Sicherheitsfunktionen prüfen. Auch die Verwendung von Regressionstests, die kritische Kernfunktionen gezielt wiederholt prüfen, kann ein bewährtes Mittel sein, um sicherzustellen, dass durch eine Änderung keine unbeabsichtigten Seiteneffekte ausgelöst werden. Automatische Test ermöglichen es auch die Dokumentation der Testergebnisse automatisiert zu erstellen, sodass Verantwortliche sofort eine Übersicht über den Status erhalten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 73fab6c7-c60f-4ee5-bd97-e842915cf98d |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 73fab6c7-c60f-4ee5-bd97-e842915cf98d |
