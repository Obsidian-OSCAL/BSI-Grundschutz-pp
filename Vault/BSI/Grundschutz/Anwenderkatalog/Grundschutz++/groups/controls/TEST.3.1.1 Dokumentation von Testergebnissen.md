---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.1 Dokumentation von Testergebnissen
parent_control: TEST.3.1 Sicherheitstest
stmt_modal_verb: SOLLTE
stmt_action_word: dokumentieren
stmt_documentation: Freigabeplan
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.1 - Dokumentation von Testergebnissen
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)*<br> *  &rarr; [Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md) *</div> | [Änderungen und Tests](practices_Änderungen_und_Tests_554ba2da-7317-4792-8548-141250039260) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Tests | einschließlich Prüfschritte, Ergebnissen und ggf. vorgenommenen Korrekturen | [dokumentieren](action_words_dokumentieren_1ed72769-e05f-4a97-ad2e-99a70f1480e8) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Änderungen und Tests SOLLTE Tests einschließlich Prüfschritte, Ergebnissen und ggf. vorgenommenen Korrekturen dokumentieren.</span>

> [!info]- Guidance
>Die Dokumentation von Tests zielt primär darauf ab, Transparenz und Nachvollziehbarkeit bei Änderungen zu gewährleisten, was das Risiko unbeabsichtigter Sicherheitslücken, Systemausfälle oder Datenverluste erheblich reduzieren kann. Ohne strukturierte Testdokumentation könnten beispielsweise fehlerhafte Konfigurationsänderungen unbemerkt in Produktivsysteme gelangen, was potenziell zu Verfügbarkeitsstörungen, verfälschten Daten oder kompromittierten Anwendungen führen könnte. Ein dokumentierter Testprozess ermöglicht zudem eine effektive Ursachenanalyse bei auftretenden Störungen, da alle durchgeführten Änderungen mit ihren beabsichtigten Wirkungen transparent nachvollzogen werden können. Eine nachvollziehbare und digital strukturierte Verknüpfung von Anforderung zu Prüfschritt und Prüfergebnissen kann durch OSCAL-Dokumente als strukturierte Daten erstellt werden. Gezielte Tests vor wesentlichen Änderungen tragen dazu bei, unbeabsichtigte Schwachstellen zu vermeiden, die zu unbefugtem Datenzugriff, Verlust von Geschäftsinformationen oder Ausfällen kritischer Systeme führen könnten. Je nach Art und Umfang der Änderungen lassen sich beispielsweise physische Zustände oder die Ausführung von Systemfunktionen verifizieren. Dabei werden sowohl die gewünschten Sicherheitsfunktionen als auch unerwünschte Zustände getestet, zum Beispiel, dass keine unautorisierten Funktionen aktiviert sind oder Apps ungewollt mit unbekannten Internetservern kommunizieren. Anwendbare Testarten umfassen statische und dynamische Tests, Unit- und Integrationstests sowie Regressionstests. Relevant ist dabei sowohl das Testen von manuellen Eingaben über die Benutzerschnittstelle als auch der Zugriffe über das Netzwerk, etwa über eine API. Die Tests können automatisiert (z. B. Unit-Tests, CI/CD-Tests, Schwachstellenscanner) oder manuell unterstützt (z. B. Click-Tests oder die Auswertung von LLM-Zusammenfassungen) durchgeführt werden. Sinnvoll ist es, automatische Tests für alle Funktionen und Codepfade einzusetzen, ergänzt durch manuelle Tests der wichtigsten Funktionen, wie Authentifizierung und Verschlüsselung, sowie durch Stichproben der übrigen Funktionen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b7a747d3-cb11-46ce-8d0c-c57cc31d5ad5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | b7a747d3-cb11-46ce-8d0c-c57cc31d5ad5 |
