---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.6 Chaos Engineering
parent_control: TEST.3.1 Sicherheitstest
stmt_modal_verb: KANN
stmt_action_word: testen
stmt_documentation: Freigabeplan
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.6 - Chaos Engineering
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)*<br> *  &rarr; [Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md) *</div> | [Änderungen und Tests](practices_Änderungen und Tests_554ba2da-7317-4792-8548-141250039260) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Resilienz bei Simulation verschiedenartiger Störungen |  | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Änderungen und Tests KANN die Resilienz bei Simulation verschiedenartiger Störungen testen.</span>

> [!info]- Guidance
>Chaos Engineering kann helfen, die Zuverlässigkeit von Systemen oder Anwendungen zu erhöhen, indem es die Resilienz, also die Fähigkeit bei störenden Einflüssen den Betrieb fortzusetzen oder wiederherzustellen, durch simulierte Ausfälle oder Störungen testet. Dabei ist jedoch zu beachten, dass dabei keine geschäftskritischen, im Betrieb befindlichen Dienste gestört werden. Daher ist der Ansatz nur nach einer Analyse und Abwägung der Risiken sinnvoll. Zweckmäßig ist es dabei, geschäftskritische Systeme und Anwendungen mit hohen Auswirkungen zu priorisieren, häufige Ausfallmodi zu testen, kritische Abhängigkeiten unter Stress zu setzen, vergangene Vorfälle nachzubilden und Systemannahmen durch methodische Prozesse zu hinterfragen. Hierzu kann eine Karte der Abhängigkeiten verwendet werden oder eine Analyse kritischer Pfade. Wertvolle Experimente können Netzwerkbeeinträchtigungen, Dienstausfälle, Abhängigkeitsunterbrechungen, Ressourcenerschöpfung, Multiregionsausfälle und Zeitsynchronisationsprobleme umfassen. Geschäftskritische Dienste können dabei z.B. durch eine Begrenzung auf bestimmte Systeme, oder Durchführung solcher Tests nur außerhalb der Betriebszeiten geschützt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 32a4ff7c-ee41-4d31-8a1e-f15ea1373181 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 32a4ff7c-ee41-4d31-8a1e-f15ea1373181 |
